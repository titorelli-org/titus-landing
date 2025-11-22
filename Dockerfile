FROM node:alpine AS builder

WORKDIR /usr/src/titus-landing

COPY . .

RUN npm install --include dev

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /usr/src/titus-landing/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/titus-landing/build .
COPY --from=builder /usr/src/titus-landing/yandex_54da74a6b4c5b75b.html .

CMD [ "nginx", "-g", "daemon off;" ]
