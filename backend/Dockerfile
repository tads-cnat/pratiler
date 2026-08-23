# Usa a imagem oficial, enxuta e que já vem com o Python 3.12
FROM python:3.12-slim

# Evita a criação de arquivos .pyc e força o log direto no terminal (bom para AWS CloudWatch)
ENV PYTHONUNBUFFERED=1
ENV DEBIAN_FRONTEND=noninteractive

# Instala apenas as dependências do sistema operacional necessárias
RUN apt-get update && apt-get install -y --no-install-recommends \
    postgresql-client \
    gcc \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Em imagens oficiais do Python, não é obrigatório usar venv, 
# mas vamos instalar as dependências aproveitando o cache do Docker
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt \
    && pip install --no-cache-dir gunicorn

# Copia o código da aplicação e o script de entrypoint
COPY . .

EXPOSE 8000