package rabbitmq

import (
	"article-backend/internal/cassandra"
	"log"
	"os"
	"github.com/joho/godotenv"
	"github.com/streadway/amqp"
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
			articles, err := cassandra.GetAllArticles() // Fetch all articles from Cassandra
			if err != nil {
				log.Printf("Failed to get articles: %s", err)
				continue
			}

			for _, article := range articles {
				// Process each article here (e.g., log, send to another service, etc.)
				log.Printf("Article ID: %s, Title: %s, Link: %s, PubDate: %s", article.ID, article.Title, article.Link, article.PubDate)
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
