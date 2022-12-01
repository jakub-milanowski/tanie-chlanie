FROM node:alpine
EXPOSE 3000
WORKDIR /code
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /code/
COPY package-lock.json /code/
RUN npm install
COPY . /code/
CMD ["npm", "start"]