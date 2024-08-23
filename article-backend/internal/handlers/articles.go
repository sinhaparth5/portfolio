package handlers

import (
	"article-backend/internal/cassandra"
	"article-backend/internal/rabbitmq"
	"github.com/gin-gonic/gin"
	"net/http"
)

func FetchArticles(c *gin.Context) {
	if err := rabbitmq.PublishFetchRequest(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to trigger article fetch"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Articles fetched successfully"})
}

func GetAllArticles(c *gin.Context) {
	articles, err := cassandra.GetAllArticles()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get articles"})
		return
	}
	c.JSON(http.StatusOK, articles)
}
