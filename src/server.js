const express = require('express');
const dotenv = require('dotenv').config()
const app = express();
const Sequelize = require('sequelize');

const dbConfig  = require('./config/database').database;

const sequelize = new Sequelize(
												dbConfig.database,
												dbConfig.username,
												dbConfig.password,
												dbConfig);

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
