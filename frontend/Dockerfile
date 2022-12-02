
# base node image
FROM node:16.14-alpine3.14 as base

# Install all node_modules, including dev dependencies
FROM base as deps
RUN mkdir /code
WORKDIR /code

ADD package.json package-lock.json ./
RUN npm install --production=false

# Build the app
FROM base as build
RUN mkdir /code
WORKDIR /code

COPY --from=deps /code/node_modules /code/node_modules
ADD public ./public
ADD app ./app
ADD package.json package-lock.json remix.config.js remix.env.d.ts tsconfig.json ./
RUN npm run build

# Finally, build the production image with minimal footprint
FROM base
ENV NODE_ENV=development
ENV PORT=3000
RUN mkdir /code
WORKDIR /code

COPY --from=deps /code/node_modules /code/node_modules
COPY --from=build /code/build /code/build
COPY --from=build /code/public /code/public
COPY package.json package-lock.json ./

# Expose the container port to the OS
EXPOSE 3000

CMD ["npm", "run", "dev"]