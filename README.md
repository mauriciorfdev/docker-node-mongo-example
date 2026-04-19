# Example App - Docker

## About Project

Minimal Node.JS (Express) backend for testing docker containers.

- Backend + Local MongoDB
- Backend + MongoDB running in a Docker container

## Setup

1. Clone the repo
2. Install NPM Packages: `npm install`
3. Setup `.env` file in the root directory and configure: `MONGO_URI` depending on the use case (see below).
4. Start development server: `npm run dev`
5. Test API endpoints

## Use Cases:

### Backend + Local MongoDB

Use this when MongoDB is installed and running on your machine:

`MONGO_URI = mongodb://localhost:27017/`

### Backend + MongoDB (Docker Container)

Use this when MongoDB is running inside a Docker container:

`MONGO_URI = mongodb://myUser:myPass@localhost:27017/mydb?authSource=admin`

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
