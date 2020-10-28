const express = require('express');
const app = express();
require('dotenv').config()

app.get('/', (req, res) => res.json({ message: 'Hello World' }))

app.listen(process.env.API_PORT, function() {
	console.log('listening on ' + process.env.API_PORT);
});
