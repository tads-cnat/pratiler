FROM ubuntu:latest

# Atualiza e instala dependências do sistema (python + postgresql-client + pip)
RUN apt update -y && apt upgrade -y && \
    apt install -y python3.12 python3.12-venv python3-pip postgresql-client

# Cria e ativa o venv
RUN python3.12 -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

WORKDIR /app

# Copia o conteúdo da pasta atual (ajuste conforme seu contexto)
COPY . .

# Instala dependências dentro do venv
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Comando padrão pode ser colocado aqui ou no docker-compose
# CMD ["sh", "-c", "python3 mysite/manage.py runserver 0.0.0.0:8000"]
