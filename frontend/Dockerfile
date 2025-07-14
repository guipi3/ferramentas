# Usar Node Alpine para imagem leve
FROM node:18-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todo o código para dentro do container
COPY . .

# Expor a porta padrão (ajuste se precisar)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
