package cassandra

import (
	"github.com/gocql/gocql"
	"log"
	"time"
)

var session *gocql.Session

type Article struct {
	ID          gocql.UUID `json:"id"`
	Title       string     `json:"title"`
	Description string     `json:"description"`
	Link        string     `json:"link"`
	PubDate     time.Time  `json:"pubDate"`
}

func InitCassandra() {
	cluster := gocql.NewCluster("localhost")
	cluster.Keyspace = "article"
	cluster.Consistency = gocql.Quorum

	var err error
	session, err = cluster.CreateSession()
	if err != nil {
		log.Fatal("Failed to connect to Cassandra:", err)
	}
	log.Println("Connected to Cassandra")
}

func SaveArticle(article Article) error {
	if err := session.Query(
		`INSERT INTO articles (id, title, description, link, pub_date) VALUES (?, ?, ?, ?, ?)`,
		gocql.TimeUUID(), article.Title, article.Description, article.Link, article.PubDate).Exec(); err != nil {
		return err
	}
	return nil
}

func GetAllArticles() ([]Article, error) {
	var articles []Article
	iter := session.Query("SELECT id, title, description, link, pub_date FROM articles").Iter()

	var article Article
	for iter.Scan(&article.ID, &article.Title, &article.Description, &article.Link, &article.PubDate) {
		articles = append(articles, article)
	}

	if err := iter.Close(); err != nil {
		return nil, err
	}

	return articles, nil
}

func Close() {
	if session != nil {
		session.Close()
		log.Println("Cassandra session closed")
	}
}
