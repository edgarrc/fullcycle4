FROM node:12.18.3-alpine3.11

USER node

COPY . /home/node/app

RUN cd /home/node/app & npm install

EXPOSE 3000

WORKDIR /home/node/app

ENTRYPOINT [ "npm", "start" ]