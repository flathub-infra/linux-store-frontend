# Builds a Docker to deliver dist/
FROM nginx:latest
COPY dist/ /usr/share/nginx/html
COPY conf/nginx/default.conf /etc/nginx/conf.d/default.conf