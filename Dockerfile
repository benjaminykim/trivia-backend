FROM node:12.16.1-alpine
WORKDIR api
COPY package.* .
COPY .babelrc .
RUN npm install
EXPOSE 8080
COPY . .
COPY .env ./src
ENTRYPOINT [ "npm", "run", "dev" ]
