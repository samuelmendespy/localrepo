FROM python:3.12

WORKDIR /app

COPY . .

RUN pip install --upgrade pip && pip install -r requirements.txt

EXPOSE 8000

CMD ["gunicorn", "launch.wsgi:application", "--bind", "0.0.0.0:8000"]