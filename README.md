# Fullcycle 4.0 - Aula1

## Criação

```
mkdir app
cd app
npm init
npm install express --save
```

Criar index.js

## Testar

```
node index.js
curl http://localhost:8080/
```

## Build

```
docker build -t aula1 .
```

## Run (daemon)

```
docker run -d -p 8080:8080 -it v1
```


## Refs
- https://www.digitalocean.com/community/tutorials/como-construir-uma-aplicacao-node-js-com-o-docker-pt
