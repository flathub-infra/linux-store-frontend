FROM nginx:latest
COPY dist/ /usr/share/nginx/html
COPY conf/nginx/nginx.conf /etc/nginx/nginx.conf
COPY conf/nginx/default.conf /etc/nginx/conf.d/default.conf
