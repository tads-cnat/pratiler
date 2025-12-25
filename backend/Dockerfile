FROM ubuntu:22.04

RUN apt update -y \ 
    && apt upgrade -y \
    && apt install -y python3.12 python3.12-venv python3-pip postgresql-client \
    && python3.12 -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

WORKDIR /app

COPY . .

RUN pip install --upgrade pip \ 
    && pip install -r requirements.txt \
    && python mysite/manage.py makemigrations \
    && python mysite/manage.py migrate
CMD [ "python", "mysite/manage.py", "runserver", "0.0.0:8000" ]
