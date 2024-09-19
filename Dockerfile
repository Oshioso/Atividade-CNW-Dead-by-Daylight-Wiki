# Usar uma imagem do Nginx como base
FROM nginx:alpine

# Copiar os arquivos do projeto para o diretório padrão do Nginx
COPY . /usr/share/nginx/html

# Expor a porta 80 para acesso ao Nginx
EXPOSE 80
