FROM node:8.16.1-alpine
WORKDIR /app
COPY ./app/package.json /app
COPY ./app /app
RUN npm install
EXPOSE 8080
CMD [ "node", "index.js" ]
