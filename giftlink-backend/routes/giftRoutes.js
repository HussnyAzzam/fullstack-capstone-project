/*jshint esversion: 8 */
const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');
const logger = require('../logger');

// Get all gifts
router.get('/', async (req, res, next) => {
	logger.info('/ called');
	try {
		const db = await connectToDatabase();

		const collection = db.collection("gifts");
		const gifts = await collection.find({}).toArray();
		res.json(gifts);
	} catch (e) {
		logger.console.error('oops something went wrong', e);
		next(e);
	}
});

// Get a single gift by ID
router.get('/:id', async (req, res, next) => {
	try {
		const db = await connectToDatabase();
		const collection = db.collection("gifts");
		const id = req.params.id;

		if (!id || id.trim() === "") {
			return res.status(400).json({ error: "Invalid or missing ID parameter" });
		}

		const gift = await collection.findOne({ id: id });

		if (!gift) {
			return res.status(404).json({ error: `Gift with ID ${id} not found` });
		}

		res.json(gift);
	} catch (e) {
		next(e);
	}
});

// Add a new gift
router.post('/', async (req, res, next) => {
	try {
		const db = await connectToDatabase();
		const collection = db.collection("gifts");
		const gift = await collection.insertOne(req.body);

		res.status(201).json(gift.ops[0]);
	} catch (e) {
		next(e);
	}
});

module.exports = router;
