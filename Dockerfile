FROM node:12 as build
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY ./app/package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts -g --silent
COPY ./app /usr/src/app
RUN npm run build

FROM nginx
COPY --from=build /usr/src/app/build /usr/share/nginx/html
RUN sed -i 's/80/3000/g' /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]