const dotenv = require('dotenv').config();

const database = {
	"database": process.env.POSTGRES_DB,
	"username": process.env.POSTGRES_USER,
	"password": process.env.POSTGRES_PASSWORD,
	"host": process.env.POSTGRES_DB,
	"dialect": process.env.POSTGRES_HOST
};

module.exports = { database }

