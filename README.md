## Description

NestJS를 활용한 랠릿 Copy 토이프로젝트

## ERD

![렐릿 pgerd version2](https://github.com/AlbertImKr/rubicon/assets/99056666/6e5b6b41-5782-4b4f-8601-a2f12ce42555)

## Installation

```bash
$ yarn install
```

## Run docker compose

```bash
$ docker compose up -d
```

## Init database

```bash
$ yarn migration:generate
$ yarn migration:run
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
