sed -i 's/\r$//' ./construir_frontend.sh
sed -i 's/\r$//' ./rodar_frontend.sh

./construir_frontend.sh

npm run dev