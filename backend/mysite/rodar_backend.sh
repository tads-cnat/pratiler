./construir_backend.sh

source .venv/bin/activate

python3 manage.py makemigrations

python3 manage.py migrate

python3 manage.py runserver