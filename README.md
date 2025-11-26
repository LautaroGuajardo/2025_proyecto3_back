## Description

# 2025_proyecto3_back
Proyecto sobre la Gestion de Reclamos

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Create database in docker
docker run -d –name proyecto3 -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin123 mongo:latest 

## Create .env
PORT=3000
MONGO_URI=mongodb://admin:admin123@localhost:27017/proyecto3?authSource=admin
JWT_SECRET=supersecreto123
NODE_ENV=development

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```