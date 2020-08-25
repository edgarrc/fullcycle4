FROM node:8.16.1-alpine
WORKDIR /app
COPY package.json /app
COPY ./app /app
RUN npm install
CMD node index.js
EXPOSE 8080