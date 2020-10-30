var express = require('express');
var router = express.Router();
var _ = require('underscore');
const db = require('../models');

router.use(function timeLog (req, res, next) {
	var d = new Date();
	console.log();
	console.log('Time: ',d.toGMTString());
	console.log('From: ', req.originalUrl);
	next();
});

router.get('/', async function(req, res) {
	const questions = await db.Question.findAll();
	res.status(200).send(questions);
});

router.get('/trivia', async function(req, res) {
	const questions = await db.Question.findAll();
	let random = _.sample(questions, 10);
	res.status(200).send(random);
});

module.exports = router;

