sed -i 's/\r$//' ./construir_backend.sh
sed -i 's/\r$//' ./rodar_backend.sh

./construir_backend.sh

source .venv/bin/activate

python3 manage.py makemigrations

python3 manage.py migrate

python3 manage.py runserver