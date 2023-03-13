FROM node:16.14-alpine3.14 as base

EXPOSE 3000
ENV NODE_ENV=development
ENV PORT=3000
ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true

WORKDIR /code

COPY /public ./public
COPY /src ./src

ADD package.json ./
ADD tsconfig.json ./
ADD next.config.js ./
ADD next-env.d.ts ./

RUN npm install
RUN npm install -D @swc/cli @swc/core

CMD ["npm", "run", "dev"]