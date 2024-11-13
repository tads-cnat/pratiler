:: INSTALAÇÃO DO VENV, ATIVAÇÃO E INSTALAÇÃO DO REQUIREMENTS (WINDOWS)

@echo off
:: Desativa a exibição dos comandos do script no terminal para deixar a saída mais limpa.

:: Nome do ambiente virtual
set ENV_NAME=venv

:: Cria o ambiente virtual
python -m venv %ENV_NAME%

:: Ativa o ambiente virtual
call %ENV_NAME%\Scripts\activate.bat

echo Ambiente virtual "%ENV_NAME%" criado e ativado!

:: Instala as dependências do requirements.txt
pip install -r requirements.txt

echo Instalando o requirements.txt com sucesso!
