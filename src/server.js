const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const { db } = require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var appRoutes = require('./routes/app');
var scoreRoutes = require('./routes/score');
app.use('/', appRoutes);
app.use('/score', scoreRoutes);

app.listen(process.env.API_PORT, '0.0.0.0');
console.log(`Running the backend API on https://0.0.0.0:${process.env.API_PORT}`);

module.exports = app;
