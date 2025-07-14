# Etapa 1: build da aplicação
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: servir via NGINX
FROM nginx:stable-alpine

# Remove a configuração padrão do nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia a nova configuração do nginx (você criará esse arquivo abaixo)
COPY nginx.conf /etc/nginx/conf.d/

# Copia os arquivos buildados do React
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
