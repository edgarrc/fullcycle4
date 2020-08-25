# Fullcycle 4.0

## Aula 2

Refs:
- https://www.keycloak.org/getting-started/getting-started-docker
- https://www.keycloak.org/app/

## Instalação

Após executar os passos do getting-started o keycloak exigirá o uso de SSL, para desabilitar:

```
docker exec -it {contaierID} bash
cd /opt/jboss/keycloak/bin
./kcadm.sh config credentials --server http://localhost:8080/auth --realm master --user admin
./kcadm.sh update realms/master -s sslRequired=NONE
```

Após criar o seu realm, desabilitar o SSL dele também

```
./kcadm.sh update realms/XXXX -s sslRequired=NONE
```

## Urls

Admin console

http://<ip>:8080/auth/admin

Login na conta

http://<ip>:8080/auth/realms/fullcycle4/account

