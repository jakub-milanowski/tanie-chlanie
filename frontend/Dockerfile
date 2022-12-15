FROM node:16.14-alpine3.14 as base

EXPOSE 3000
ENV NODE_ENV=development
ENV PORT=3000
ENV CHOKIDAR_USEPOLLING=true

WORKDIR /code

COPY /public ./public
COPY /app ./app

ADD package.json remix.config.js remix.env.d.ts tsconfig.json ./

RUN npm install

CMD ["npm", "run", "dev"]