# Backend + MongoDB (Dockerized)

## Overview

In this setup:

- Backend runs inside a container
- MongoDB runs inside in another container, as explained [here](../README.md)
- Both communicate via Docker network

We need to create the docker network, modify the connection string, and finally create/run both containers.

_This approach removes the dependency on your local Node.js and MongoDB installations and better reflects a production-like environment._

## Setup

### Docker Network

```
docker network create mired
```

### Connection String

Replace the `localhost` part with `mongo-container` (The name of the mongodb container):

Before:

```js
const connString =
  'mongodb://myUser:myPass@localhost:27017/mydb?authSource=admin';
```

Now:

```js
const connString =
  'mongodb://myUser:myPass@mongo-container:27017/mydb?authSource=admin';
```

Use the connection string directly on `server.js`.

### Docker Containers

#### MongoDB

Download MongoDB Official Image from Docker Hub with this command:

```
docker pull mongo
```

Create a MongoDB container with `--network` flag:

```
docker create -p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=myUser \
-e MONGO_INITDB_ROOT_PASSWORD=myPass \
--name mongo-container \
--network mired \
mongo
```

#### Backend

Add a new file named `Dockerfile` in the root directory, with this content:

```docker
FROM node:18

RUN mkdir -p /home/app

COPY . /home/app

EXPOSE 3000

CMD ["node", "/home/app/server.js"]
```

Create the image from the `Dockerfile` with this command:

```
docker build -t miapp:1 .
```

Create the backend container from that image and add `--network` flag:

```
docker create -p 3000:3000 \
--name miapp-container \
--network mired \
miapp:1
```

#### Running both containers

First, run MongoDB Container:

```
docker start mongo-container
```

Then, run your Backend Container

```
docker start miapp-container
```

Finally, test the endpoints as usual:

- _`localhost:3000`_
- _`localhost:3000/crear`_
