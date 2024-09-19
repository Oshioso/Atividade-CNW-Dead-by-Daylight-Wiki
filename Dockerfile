# Usar uma imagem do Nginx como base
FROM nginx:alpine

# Copiar os arquivos do projeto para o diretório padrão do Nginx
COPY . /usr/share/nginx/html

# Expor a porta 80 para acesso ao Nginx
EXPOSE 80

# 1 passo no terminal da pasta mãe 

# docker build -t meu-projeto-web .  Explicação(Construir a imagem Docker)
# docker run -d -p 8080:80 meu-projeto-web Explicação(Executar o container)
# http://localhost:8080

