FROM node:12.16.1-alpine
WORKDIR api/src
COPY package.* .
RUN npm install
EXPOSE 8080
COPY ./src ./src
COPY .env .
COPY .env ./src
ENTRYPOINT [ "npm", "run", "dev" ]
