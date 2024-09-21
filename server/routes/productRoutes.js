const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

// Create a new product (admin only)
router.post('/', async (req, res) => {
  const { name, price, description, stock } = req.body;
  const product = await Product.create({ name, price, description, stock });
  res.json(product);
});

module.exports = router;
