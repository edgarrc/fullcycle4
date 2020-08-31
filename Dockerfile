FROM node:12 AS builder
WORKDIR /app
COPY ./app/package.json ./
RUN npm install
COPY ./app/ .
RUN npm run build
EXPOSE 3000
FROM node:12-alpine
WORKDIR /app
COPY --from=builder /app ./
CMD ["npm", "start"]