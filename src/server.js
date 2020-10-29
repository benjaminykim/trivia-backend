const express = require('express');
const dotenv = require('dotenv').config()
const app = express();
const Sequelize = require('sequelize');

const config = {
	"database": process.env.POSTGRES_DB,
	"username": process.env.POSTGRES_USER,
	"password": process.env.POSTGRES_PASSWORD,
	"host": process.env.POSTGRES_DB,
	"dialect": process.env.POSTGRES_HOST,
};

const sequelize = new Sequelize(
												config.database,
												config.username,
												config.password,
												config);

sequelize.authenticate()
	.then(() => {
		console.log('Connection successfully established.');
	})
	.catch(err => {
		console.error('Unable to connect to db:', err);
	});


app.get('/', (req, res) => res.json({ message: 'Hello World' }))

app.listen(process.env.API_PORT, function() {
	console.log('listening on ' + process.env.API_PORT);
});
