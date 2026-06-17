
# Estágio 1: Compilar o React
FROM node:22-alpine AS build

ARG VITE_API_URL=/api

ENV VITE_API_URL=$VITE_API_URL

ARG VITE_GOOGLE_BOOKS_KEY
ENV VITE_GOOGLE_BOOKS_KEY=$VITE_GOOGLE_BOOKS_KEY

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Estágio 2: Servir com Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Configuração para corrigir o erro de rotas do React Router
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
