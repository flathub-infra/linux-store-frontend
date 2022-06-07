FROM docker.io/library/node:14 AS build

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build:prod

FROM docker.io/nginxinc/nginx-unprivileged:stable
COPY --from=build /app/dist /srv/http/dist
ADD nginx.conf /etc/nginx/conf.d/default.conf
