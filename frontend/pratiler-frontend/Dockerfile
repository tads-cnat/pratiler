FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

ENV VITE_URL_API="http://4.203.106.2:8000/api/"

RUN apt-get update && apt-get install -y \
    curl \
    gnupg \
    ca-certificates \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash -

RUN apt-get install -y nodejs

WORKDIR /app

COPY . .

RUN npm install
