FROM node:lts-alpine

WORKDIR /app

COPY ./package*.json ./
RUN yarn

COPY ./public ./public
COPY ./tsconfig.json ./
COPY ./src ./src

CMD yarn start