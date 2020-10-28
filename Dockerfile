FROM node:12.16.1-alpine
WORKDIR /src
COPY package.* .
RUN npm install
EXPOSE 8080
COPY ./src .
COPY .env .
ENTRYPOINT [ "npm", "run", "dev" ]
