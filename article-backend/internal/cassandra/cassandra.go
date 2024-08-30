package cassandra

import (
	"log"
	"time"
	"os"
	"github.com/gocql/gocql"
	"github.com/joho/godotenv"
	"github.com/streadway/amqp"
)

var (
	session  *gocql.Session
	rmqConn  *amqp.Connection
	rmqCh    *amqp.Channel
)

// Article represents the structure of an article
type Article struct {
	ID      string    `json:"id"` // Changed to string for TEXT type
	Title   string    `json:"title"`
	Link    string    `json:"link"`
	PubDate time.Time `json:"pubDate"`
}

// InitCassandra initializes the Cassandra connection
func InitCassandra() {
	cluster := gocql.NewCluster("localhost") // Use the service name defined in your Docker Compose
	cluster.Keyspace = "medium_article"
	cluster.Consistency = gocql.Quorum

	var err error
	session, err = cluster.CreateSession()
	if err != nil {
		log.Fatal("Failed to connect to Cassandra:", err)
	}
	log.Println("Connected to Cassandra")

	// Initialize RabbitMQ connection
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}

	rabbitMQUser := os.Getenv("RABBITMQ_USER")
	rabbitMQPass := os.Getenv("RABBITMQ_PASS")
	rabbitMQHost := os.Getenv("RABBITMQ_HOST")
	rabbitMQPort := os.Getenv("RABBITMQ_PORT")

	rabbitMQURL := "amqp://" + rabbitMQUser + ":" + rabbitMQPass + "@" + rabbitMQHost + ":" + rabbitMQPort + "/"

	rmqConn, err = amqp.Dial(rabbitMQURL)
	if err != nil {
		log.Fatal("Failed to connect to RabbitMQ:", err)
	}

	rmqCh, err = rmqConn.Channel()
	if err != nil {
		log.Fatal("Failed to open a RabbitMQ channel:", err)
	}

	_, err = rmqCh.QueueDeclare(
		"articles_queue", // Queue name
		true,             // Durable
		false,            // AutoDelete
		false,            // Exclusive
		false,            // Arguments
		nil,
	)
	if err != nil {
		log.Fatal("Failed to declare a RabbitMQ queue:", err)
	}
	log.Println("Queue 'articles_queue' declared")
}

// GetAllArticles fetches all articles from Cassandra and publishes a message to RabbitMQ
func GetAllArticles() ([]Article, error) {
	var articles []Article
	iter := session.Query("SELECT article_id, article_name, article_link, article_created FROM articles").Iter()

	var article Article
	for iter.Scan(&article.ID, &article.Title, &article.Link, &article.PubDate) {
		articles = append(articles, article)
	}

	if err := iter.Close(); err != nil {
		return nil, err
	}

	// Publish message to RabbitMQ with article data
	for _, article := range articles {
		body := []byte(article.ID + "|" + article.Title + "|" + article.Link + "|" + article.PubDate.Format(time.RFC3339))
		err := rmqCh.Publish(
			"",
			"articles_queue",
			false,
			false,
			amqp.Publishing{
				ContentType: "text/plain",
				Body:        body,
			},
		)
		if err != nil {
			log.Printf("Failed to publish message: %s", err)
		}
	}

	return articles, nil
}

// Close cleans up the Cassandra and RabbitMQ connections
func Close() {
	if session != nil {
		session.Close()
		log.Println("Cassandra session closed")
	}

	if rmqCh != nil {
		rmqCh.Close()
		log.Println("RabbitMQ channel closed")
	}

	if rmqConn != nil {
		rmqConn.Close()
		log.Println("RabbitMQ connection closed")
	}
}
