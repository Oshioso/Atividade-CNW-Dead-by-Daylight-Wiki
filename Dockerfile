# Use a imagem oficial leve do Nginx baseada em Alpine
FROM nginx:alpine

# Copie os arquivos do seu projeto para o diretório padrão do Nginx
COPY . /usr/share/nginx/html

# Expor a porta 80 para que o Nginx seja acessível externamente
EXPOSE 80

# 1 passo no terminal da pasta mãe 

# docker build -t meu-projeto-web .  Explicação(Construir a imagem Docker)

# docker run -d -p 8080:80 meu-projeto-web Explicação(Executar o container)

# Comandos Adicionais
# docker ps (Verifica se o container está em execução)


# http://localhost:8080 (Acessar o aplicativo no navegador)

# docker stop <container_id> (Parar o container - Substitua <container_id> pelo ID do seu container, que você pode obter usando docker ps.)

# http://localhost:8080

