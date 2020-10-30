var express = require('express');
var router = express.Router();
var _ = require('underscore');
const db = require('../models');

router.use(function timeLog (req, res, next) {
	var d = new Date();
	console.log();
	console.log('Score Router');
	console.log('Time: ',d.toGMTString());
	console.log('From: ', req.originalUrl);
	next();
});

router.get('/', async function(req, res) {
	console.log("get score");
	const scores = await db.Score.findAll();
	res.status(200).send(scores);
});

router.post('/', async function(req, res) {
	if (req.body && req.body.score && req.body.user) {
		const ret = await db.Score.create({score: req.body.score, user: req.body.user});
		await ret.save();
		res.status(201).end(JSON.stringify(ret));
	}
});

module.exports = router;

