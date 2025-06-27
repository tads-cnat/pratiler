FROM ubuntu:latest

RUN apt update -y && apt upgrade -y && \
    apt install -y python3.12 python3.12-venv python3-pip postgresql-client

RUN python3.12 -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

WORKDIR /app

COPY . .

RUN pip install --upgrade pip
RUN pip install -r requirements.txt
