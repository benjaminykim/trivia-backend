# [Tandem Trivia](https://trivia.briefs.link) Backend REST API

## Dependencies

- [Live Demo](https://trivia.briefs.link)
- [Frontend Repo](https://github.com/benjaminykim/trivia-frontend.git)

Install `docker` (19<) and `docker-compose` (1.26<) to run the backend web application.

This application was built with Node, Express, JS, Sequelize, Postgres, Docker, BASH, AWS EC2.

## Deployment

We use a helper script `deploy.sh` to run all commands. It uses docker commands in order to build different modes of
the backend application.

For local deployment, run:

`./deploy.sh dev`

If you are runnning local deployment for the first time, you will have to manually execute database migrations and
seeding within the docker container:

```
sh ./deploy.sh dev
docker exec -it api sh
cd src
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

NOTE: You may need to execute the `dev` command twice for your first build (postgres reasons).

To run tests:

`sh ./deploy.sh test`

To seed the database:

`sh ./deploy.sh seed`


## High Level Overview

This is a minimal rest api that supports `GET` and `POST` methods from a frontend client.

The user can `GET` a set of 10 random trivia questions from a test bank and `POST` a numeric score at the end of the session. The user may also `GET` top scores and `POST` a score themself.

## System Architecture

- This application is containerized and deployed by Docker with multiple docker configurations for the build mode (inspect deploy.sh script).
- The api is hosted on a free tier AWS EC2 instance in Northern California
- NameCheap uses Cloudflare nameservers
- Cloudflare enabled TLS HTTPS security
- Cloudflare contains A NAME record to point `dev` subdomain to AWS EC2 elastic IPv4 address (backend)
- Cloudflare contains A NAME record to point `trivia` subdomain to Firebase IPv4 address (frontend)
- Docker configuration is quite complex and containerizes NGINX for security, and in the future load balancing

## Testing
Execute `sh .deploy.sh test`
Tests are in `src/test` and use Jest and Supertest

## Considerations

This backend is minimal, but the docker configuration and deployment are considerably complex. There are more than 6 docker build modes for (prod/dev/logs/test/db/shell).

Future features include:
- show all questions
- user model and auth
- caching
