Voici un exemple de Dockerfile pour chacun des trois serveurs :

Dockerfile pour le Server 1 :
```bash
FROM node:14

WORKDIR /app

COPY server1.js .

RUN npm install express axios

ENV SERVER2_ADDRESS=http://server2:3001

CMD ["node", "server1.js"]
```
Dockerfile pour le Server 2 :
```bash
FROM node:14

WORKDIR /app

COPY server2.js .

RUN npm install express axios

ENV SERVER1_ADDRESS=http://server1:3000

CMD ["node", "server2.js"]
```
Dockerfile pour le Server 3 :
```bash
FROM node:14

WORKDIR /app

COPY server3.js .

RUN npm install express axios

CMD ["node", "server3.js"]
```
Une fois que les images sont construites, vous pouvez lancer les serveurs dans leur propre conteneur respectif en utilisant la commande docker-compose:
```dockerfile
version: '3'
services:
  server1:
    build:
      context: .
      dockerfile: Dockerfile-server1
    ports:
      - "3000:3000"
    environment:
      - SERVER2_ADDRESS=http://server2:3002
  server2:
    build:
      context: .
      dockerfile: Dockerfile-server2
    ports:
      - "3002:3002"
    environment:
      - SERVER1_ADDRESS=http://server1:3000
  server3:
    build:
      context: .
      dockerfile: Dockerfile-server3
    ports:
      - "3001:3001"
```
Avec cette configuration, le ping-pong continuera à fonctionner car les serveurs 1 et 2 se connectent à l'adresse de l'autre serveur via les variables d'environnement, 
qui sont passées lors du démarrage des conteneurs.
Il suffit d'exécuter la commande docker-compose up dans le même répertoire que le fichier docker-compose.yml 
pour démarrer les trois serveurs dans leurs conteneurs respectifs.

