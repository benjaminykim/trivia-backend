const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const { db } = require('./models');

app.get('/', (req, res) => res.json({ message: 'Hello World' }))

app.listen(process.env.API_PORT, function() {
	console.log('listening on ' + process.env.API_PORT);
});
