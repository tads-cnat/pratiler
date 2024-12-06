# INSTALAÇÃO DO VENV, ATIVAÇÃO E INSTALAÇÃO DO REQUIREMENTS (LINUX)

#!/bin/bash

# Nome do ambiente virtual
ENV_NAME="venv"

# Cria o ambiente virtual
python3 -m venv $ENV_NAME

# Ativa o ambiente virtual
source $ENV_NAME/bin/activate

echo "Ambiente virtual '$ENV_NAME' criado e ativado!"

pip install -r backend/requirements.txt

echo "Instalando o requirements.txt com sucesso!"
