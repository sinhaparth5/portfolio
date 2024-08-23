package services

import (
	"article-backend/internal/cassandra"
	"encoding/xml"
	"log"
	"net/http"
	"time"
)

type RSS struct {
	Channel Channel `xml:"channel"`
}

type Channel struct {
	Item []Item `xml:"item"`
}

type Item struct {
	Title       string `xml:"title"`
	Description string `xml:"description"`
	Link        string `xml:"link"`
	PubDate     string `xml:"pubDate"`
}

func FetchMediumArticles() []cassandra.Article {
	resp, err := http.Get("https://medium.com/feed/@parth-sinha")
	if err != nil {
		log.Println("Error fetching Medium Articles:", err)
		return nil
	}
	defer resp.Body.Close()

	var rss RSS
	if err := xml.NewDecoder(resp.Body).Decode(&rss); err != nil {
		log.Println("Failed to parse RSS feed:", err)
		return nil
	}

	var articles []cassandra.Article
	for _, item := range rss.Channel.Item {
		pubDate, _ := time.Parse(time.RFC1123Z, item.PubDate)
		articles = append(articles, cassandra.Article{
			Title:       item.Title,
			Description: item.Description,
			Link:        item.Link,
			PubDate:     pubDate,
		})
	}
	return articles
}
