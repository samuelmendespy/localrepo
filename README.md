# localrepo

Python and Djando chosen to fit job stack

install Python

$ py -m pip install Django==4.2.19

Django Version 4.2.19 was chosen because it a LTS version supported till 2026 with extense cases of application.
https://www.djangoproject.com/download/#supported-versions

## Gunicorn

Gunicorn is the Python Application Server that will run Django. It receives HTTP requests and forwars them to Django process.

pip install gunicorn

## Nginx

Nginx will act as a rever server, receiving HTTP requests from outside and forwarding them to Gunicorn. It will also be responsible for deliver static files and midia directly, withouth overcharge Gunicorn.

Nginx can provide addition features, as caching, SSL/TLS (HTTPS), and load balancing, turning your environment more robust.

## Requiriments file (Innitial development stage )

Requiriments file can be generated with the following command
pip freeze > requirements.txt

```markdown
web:
build: ./car_rental_api
container_name: django-app
ports: - "8000:8000"
volumes: - ./car_rental_api:/app
depends_on: - db
environment:
DB_NAME: ${MYSQL_DATABASE}
DB_USER: ${MYSQL_USER}
DB_PASSWORD: ${MYSQL_ROOT_PASSWORD}
DB_HOST: db
DB_PORT: 3306
restart: unless-stopped
networks: - backend
```

## FRONTEND

cd rental-app/rent/
npm run dev
