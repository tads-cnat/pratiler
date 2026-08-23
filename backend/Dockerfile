FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive
ENV PYTHONUNBUFFERED=1

# 1. Instala suporte a PPA e pacotes do sistema
RUN apt-get update && apt-get install -y --no-install-recommends \
    software-properties-common \
    postgresql-client \
    && add-apt-repository ppa:deadsnakes/ppa -y \
    && apt-get update \
    && apt-get install -y --no-install-recommends \
       python3.12 \
       python3.12-venv \
       python3.12-dev \
       gcc \
    && rm -rf /var/lib/apt/lists/*

# 2. Cria o ambiente virtual e atualiza o PATH
RUN python3.12 -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

WORKDIR /app

# 3. Instala dependências Python (Aproveita o cache do Docker)
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt \
    && pip install --no-cache-dir gunicorn

# 4. Copia a aplicação
COPY . .

EXPOSE 8000

# 5. Roda o servidor WSGI de produção
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "mysite.wsgi:application"]