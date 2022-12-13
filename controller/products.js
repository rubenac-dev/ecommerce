const {connect} = require('../utils/db')
const express = require('express');

const Product = require('../models/Product');
connect();

const router = express.Router();

router.get('', async (req, res) => {
	try {
		const products = await Product.find();
		return res.status(200).json(products)
	} catch (err) {
		return res.status(500).json(err);
	}
});

router.get('/id/:id', async (req, res) => {
	const id = req.params.id;
	try {
		const product = await Product.findById(id);
		if (product) {
			return res.status(200).json(product);
		} else {
			return res.status(404).json('No Product found by this id');
		}
	} catch (err) {
		return res.status(500).json(err);
	}
});

router.get('name/:name', async (req, res) => {
	const {name} = req.params;
	try {
		const productByName = await Product.find({ name });
		return res.status(200).json(productByName);
	} catch (err) {
		return res.status(500).json(err);
	}
});

router.get('category/:category', async (req, res) => {
	const {category} = req.params;

	try {
		const productByCategory = await Product.find({ category });
		return res.status(200).json(productByCategory);
	} catch (err) {
		return res.status(500).json(err);
	}
});

router.get('price/:price', async (req, res) => {
	const {price} = req.params;

	try {
		const productByPrice = await Product.find({ price: {$gt:price} });
		return res.status(200).json(productByPrice);
	} catch (err) {
		return res.status(500).json(err);
	}
});

module.exports=router
