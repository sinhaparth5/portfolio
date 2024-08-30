# Medium DAGs

## Run Apache Airflow
Fetching docker-compose.yaml file
```bash
curl -LfO 'https://airflow.apache.org/docs/apache-airflow/2.10.0/docker-compose.yaml'
```

Create files for the dag
- ./dags - you can put your DAG files here.

- ./logs - contains logs from task execution and scheduler.

- ./config - you can add custom log parser or add airflow_local_settings.py to configure cluster policy.

- ./plugins - you can put your custom plugins here.

```Bash
mkdir dags logs config plugins
```

### Initializing Environment
```Bash
mkdir -p ./dags ./logs ./plugins ./config
echo -e "AIRFLOW_UID=$(id -u)" > .env
```