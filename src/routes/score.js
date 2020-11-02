var express = require('express');
var router = express.Router();
var _ = require('underscore');
const db = require('../models');

router.get('/', async function(req, res) {
	const scores = await db.Score.findAll({
		attributes: [
			'user',
			'score',
		],
		order: [['score', 'DESC']],
	}
	);
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

