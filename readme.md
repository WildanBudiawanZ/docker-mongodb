# MongoDB

## Install Mongodb Docker

create ``docker-compose.yml``
```yml
version: "3.5"

services:
  mongo:
    container_name: mongo
    image: mongo:4.2
    ports:
      - 27017:27017
    command: mongod
```

execute ``docker-compose``
```bash
docker compose -f docker-compose.yml up -d
```

access mongo server using terminal
```
docker exec -it mongo /bin/sh
mongo --host localhost --port 27017
```
