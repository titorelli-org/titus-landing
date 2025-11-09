FROM node:alpine AS builder

WORKDIR /usr/src/titus-landing

COPY . .

RUN npm install --include dev

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /usr/src/titus-landing/build .

CMD [ "nginx", "-g", "daemon off;" ]
