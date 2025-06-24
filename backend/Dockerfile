FROM ubuntu:latest

# Atualiza e instala dependências do sistema
RUN apt update -y && apt upgrade -y
RUN apt install python3.12 python3.12-venv python3-pip -y

# Cria e ativa o venv
RUN python3.12 -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

WORKDIR /app
COPY . .

# Instala dependências dentro do venv
RUN pip install --upgrade pip && pip install -r requirements.txt
RUN python3.12 mysite/manage.py makemigrations
RUN python3.12 mysite/manage.py migrate
