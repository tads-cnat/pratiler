# INSTALAÇÃO DO VENV, ATIVAÇÃO E INSTALAÇÃO DO REQUIREMENTS (LINUX)

#!/bin/bash

# Cria o ambiente virtual
python3 -m venv .venv

# Ativa o ambiente virtual
source .venv/bin/activate

echo "Ambiente virtual .venv criado e ativado!"

pip install -r ../requirements.txt

echo "Instalando o requirements.txt com sucesso!"