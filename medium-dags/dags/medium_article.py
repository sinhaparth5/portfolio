from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime, timedelta
from cassandra.cluster import Cluster
from cassandra.auth import PlainTextAuthProvider
import feedparser
import time

# URL of the Medium RSS feed
RSS_FEED_URL = 'https://medium.com/feed/@parth-sinha'

# Cassandra connection details
CASSANDRA_CONNECTION_NAME = 'cassandra_article'
KEYSPACE = 'medium_article'  # Replace with your keyspace name
TABLE_NAME = 'articles'

def get_cassandra_session():
    # Obtain the Cassandra connection from Airflow
    from airflow.hooks.base import BaseHook
    connection = BaseHook.get_connection(CASSANDRA_CONNECTION_NAME)
    
    # Setup authentication (if needed)
    auth_provider = None
    if connection.login and connection.password:
        auth_provider = PlainTextAuthProvider(username=connection.login, password=connection.password)
    
    # Create a Cassandra session
    cluster = Cluster([connection.host], port=connection.port, auth_provider=auth_provider)
    session = cluster.connect(KEYSPACE)
    return session

def create_table():
    session = get_cassandra_session()
    
    # Create the table if it doesn't exist
    session.execute(f'''
        CREATE TABLE IF NOT EXISTS {TABLE_NAME} (
            article_id TEXT PRIMARY KEY,
            article_name TEXT,
            article_created TIMESTAMP,
            article_link TEXT,
            article_image_url TEXT
        )
    ''')

def save_article_details(article_id, title, published, link, image_url):
    session = get_cassandra_session()
    
    # Convert the published timestamp to a proper format
    published_timestamp = datetime.fromtimestamp(time.mktime(published))

    # Insert the article details into the table
    session.execute(f'''
        INSERT INTO {TABLE_NAME} (article_id, article_name, article_created, article_link, article_image_url)
        VALUES (%s, %s, %s, %s, %s)
    ''', (article_id, title, published_timestamp, link, image_url))

def fetch_and_process_articles(rss_feed_url):
    # Parse the RSS feed
    feed = feedparser.parse(rss_feed_url)
    
    # Iterate through entries and process article details
    for entry in feed.entries:
        # Extract and process the GUID
        guid = entry.id
        article_id = guid.split('/p/')[1] if '/p/' in guid else guid
        
        # Extract other details
        title = entry.title
        published = entry.published_parsed  # parsed to a time structure
        link = entry.link
        # Extract image URL if available
        image_url = entry.media_thumbnail[0]['url'] if 'media_thumbnail' in entry and len(entry.media_thumbnail) > 0 else None
        
        # Save the article details to the Cassandra database
        save_article_details(article_id, title, published, link, image_url)

# Define the DAG
default_args = {
    'owner': 'airflow',
    'depends_on_past': False,
    'start_date': datetime(2023, 8, 1),
    'retries': 1,
    'retry_delay': timedelta(minutes=5),
}

with DAG(
    'medium_articles_to_cassandra',
    default_args=default_args,
    description='Fetch Medium articles and store them in Cassandra',
    schedule_interval='0 0 * * 0',  # Every Sunday at 12 AM
    catchup=False
) as dag:

    # Task to create the table
    create_table_task = PythonOperator(
        task_id='create_table',
        python_callable=create_table
    )

    # Task to fetch and process articles
    fetch_and_process_articles_task = PythonOperator(
        task_id='fetch_and_process_articles',
        python_callable=fetch_and_process_articles,
        op_args=[RSS_FEED_URL]
    )

    # Set the task dependencies
    create_table_task >> fetch_and_process_articles_task
