# trivia-backend

## Dependencies

Download docker engine and docker compose in order to run the backend web application.

## Deployment

We use a helper script `deploy.sh` to run all commands. It uses docker commands in order to build different modes of
the backend application.

For local deployment, run:

`./deploy.sh dev`

If you are runnning local deployment for the first time, you will have to manually execute database migrations and
seeding within the docker container:

```
./deploy.sh dev
docker exec -it api sh
cd src
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

To run tests:

`./deploy.sh test`

To seed the database:

`./deploy.sh seed`
