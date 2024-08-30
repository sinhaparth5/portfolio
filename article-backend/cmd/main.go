package main

import (
	"article-backend/internal/cassandra"
	"article-backend/internal/handlers"
	"article-backend/internal/middleware"
	"article-backend/internal/rabbitmq"
	"github.com/gin-gonic/gin"
	"log"
	"sync"
)

func main() {
	cassandra.InitCassandra()
	defer cassandra.Close()

	rabbitmq.InitRabbitMQ()
	defer rabbitmq.Close()
	rabbitmq.StartConsumer()

	r := gin.Default()

	r.Use(middleware.CorsMiddleware())
	r.Use(middleware.RateLimit())
	r.Use(middleware.SecurityHeaders())

	r.POST("/fetch-articles", handlers.FetchArticles)
	r.GET("/articles", handlers.GetAllArticles)

	var wg sync.WaitGroup
	wg.Add(2)

	go func() {
		defer wg.Done()
		if err := r.Run(":8001"); err != nil {
			log.Fatal(err)
		}
	}()

	wg.Wait()
}
