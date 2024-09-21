const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Get all orders (admin only)
router.get('/', async (req, res) => {
  const orders = await Order.findAll();
  res.json(orders);
});

// Create a new order
router.post('/', async (req, res) => {
  const { userId, products, totalPrice } = req.body;
  const order = await Order.create({ userId, totalPrice });
  await order.addProducts(products);
  res.json(order);
});

module.exports = router;
