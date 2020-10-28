const express = require('express');
const app = express();
require('dotenv').config()

app.listen(process.env.API_PORT, function() {
	console.log('listening on ' + process.env.API_PORT);
});
