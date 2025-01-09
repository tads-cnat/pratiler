call .\construir_backend.bat

call python .\manage.py makemigrations

call python .\manage.py migrate

call python .\manage.py runserver