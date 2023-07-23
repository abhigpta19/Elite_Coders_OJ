FROM node:16-alpine
RUN apk add --no-cache g++ \
     && apk add --no-cache --virtual .build-deps python3 \
     && ln -sf python3 /usr/bin/python \
     && ln -sf pip3 /usr/bin/pip \
     && apk add openjdk11
WORKDIR /app
COPY . .
RUN npm install
CMD [ "npm","run","dev"]