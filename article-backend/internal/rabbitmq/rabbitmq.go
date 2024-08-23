package rabbitmq

import (
	"article-backend/internal/cassandra"
	"article-backend/internal/services"
	"github.com/joho/godotenv"
	"github.com/streadway/amqp"
	"log"
	"os"
)

var conn *amqp.Connection
var channel *amqp.Channel

func InitRabbitMQ() {
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}

	// Get RabbitMQ credentials from environment variables
	rabbitMQUser := os.Getenv("RABBITMQ_USER")
	rabbitMQPass := os.Getenv("RABBITMQ_PASS")
	rabbitMQHost := os.Getenv("RABBITMQ_HOST")
	rabbitMQPort := os.Getenv("RABBITMQ_PORT")

	// Build RabbitMQ connection URL
	rabbitMQURL := "amqp://" + rabbitMQUser + ":" + rabbitMQPass + "@" + rabbitMQHost + ":" + rabbitMQPort + "/"

	var err error
	conn, err = amqp.Dial(rabbitMQURL)
	if err != nil {
		log.Fatal("Failed to connect to RabbitMQ:", err)
	}

	channel, err = conn.Channel()
	if err != nil {
		log.Fatal("Failed to open a channel:", err)
	}
	log.Println("Connected to RabbitMQ")

	// Declare the queue
	_, err = channel.QueueDeclare(
		"fetch_articles", // Queue name
		true,             // Durable
		false,            // AutoDelete
		false,            // Exclusive
		false,            // Arguments
		nil,
	)
	if err != nil {
		log.Fatal("Failed to declare a queue:", err)
	}
	log.Println("Queue 'fetch_articles' declared")
}

func PublishFetchRequest() error {
	return channel.Publish(
		"",
		"fetch_articles",
		false,
		false,
		amqp.Publishing{
			ContentType: "application/json",
			Body:        []byte("fetch_articles"),
		},
	)
}

func StartConsumer() {
	msgs, err := channel.Consume(
		"fetch_articles",
		"",
		true,
		false,
		false,
		false,
		nil,
	)
	if err != nil {
		log.Fatal("Failed to register a consumer:", err)
	}

	go func() {
		for msg := range msgs {
			log.Printf("Received a message: %s", msg.Body)
			articles := services.FetchMediumArticles()
			for _, article := range articles {
				if err := cassandra.SaveArticle(article); err != nil {
					log.Printf("Failed to save article %s: %s", article.Title, err)
				}
			}

		}
	}()
}

func Close() {
	if channel != nil {
		if err := channel.Close(); err != nil {
			log.Printf("Failed to close RabbitMQ channel: %v", err)
		} else {
			log.Println("RabbitMQ channel closed")
		}
	}

	if conn != nil {
		if err := conn.Close(); err != nil {
			log.Printf("Failed to close RabbitMQ connection: %v", err)
		} else {
			log.Println("RabbitMQ connection closed")
		}
	}
}
