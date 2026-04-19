# Example App - Docker

## About Project

Minimal Node.JS (Express) backend designed to demonstrate how to connect an application to MongoDB in two different setups:

- Backend + Local MongoDB (MongoDB installed on your machine)
- Backend + MongoDB running in a Docker container

## Prerequisites

- Node.JS
- Docker (only required for the container-based setup)
- MongoDB (only required for the local setup)

## Setup

1. Clone the repo
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory and configure: `MONGO_URI` depending on the use case (see below)
4. Start development server: `npm run dev`
5. Test API endpoints

## Use Cases:

### 1. Backend + Local MongoDB

Once MongoDB is installed and running on your machine, use the following value in your `.env` file:

```
MONGO_URI = mongodb://localhost:27017/
```

### 2. Backend + MongoDB (Docker Container)

The following command allows you to run MongoDB inside a Docker Container:

```
docker run -d -p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=myUser \
-e MONGO_INITDB_ROOT_PASSWORD=myPass \
--name mongo-container \
mongo
```

#### Explanation

- `docker run`: Pulls the MongoDB image (if not available locally) and starts a new container.

- `-d`: Runs the container in detached mode (in the background)

- `-p 27017:27017`: Maps port `27017` on your host to port `27017` in the container (`hostPort:containerPort`)

- `-e MONGO_INITDB_ROOT_USERNAME=myUser`: Sets the root username

- `-e MONGO_INITDB_ROOT_PASSWORD=myPass`: Sets the root password

- `--name mongo-container`: Assigns a name to the container (optional but recommended)

- `mongo`: The official MongoDB image from Docker Hub

#### Connection String

Once the container is running, use the following value in your `.env` file:

```
MONGO_URI = mongodb://myUser:myPass@localhost:27017/mydb?authSource=admin
```

## API Endpoints

| Methods | Endpoints | Actions        |
| ------- | --------- | -------------- |
| GET     | /         | Get all books  |
| GET     | /crear    | Add a new book |

You can test the endpoints using:

- Postman
- Thunder Client (VS Code Extension)
- Your browser:
  - `localhost:3000`
  - `localhost:3000/crear`

## Tags

![Node.js](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff)
