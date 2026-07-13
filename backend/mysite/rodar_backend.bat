call .\construir_backend.bat

call python .\manage.py makemigrations

call python .\manage.py migrate

@REM call python .\manage.py runserver

call python .\manage.py runsslserver localhost:8000 --certificate cert.pem --key key.pem