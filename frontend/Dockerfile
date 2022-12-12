# base node image
FROM node:16.14-alpine3.14 as base

# Install all node_modules, including dev dependencies
FROM base as deps
RUN mkdir /code
WORKDIR /code
COPY /public ./public
COPY /app ./app
ADD package.json ./
ENV NODE_ENV=development
RUN npm install

# Build the app
FROM base as build
RUN mkdir /code
WORKDIR /code

COPY --from=deps /code/node_modules ./node_modules
COPY /public ./public
COPY /app ./app
ADD package.json remix.config.js remix.env.d.ts tsconfig.json ./
RUN npm run build

# Finally, build the production image with minimal footprint
FROM base

ENV PORT=3000
RUN mkdir /code
WORKDIR /code

COPY /app ./app
COPY --from=deps /code/node_modules ./node_modules
COPY --from=build /code/build ./build
COPY --from=build /code/public ./public
COPY package.json ./

# Expose the container port to the OS
EXPOSE 3000

CMD ["npm", "run", "dev"]