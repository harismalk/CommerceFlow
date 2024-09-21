// server/routes/cartRoutes.js
const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Example route to get cart items (protected route)
router.get('/', authMiddleware, async (req, res) => {
  // Assuming you have cart items stored in the database
  const cartItems = [
    { id: '1', name: 'Product 1', price: 100, quantity: 2 },
    { id: '2', name: 'Product 2', price: 50, quantity: 1 }
  ];
  res.json(cartItems);  // Send the cart items to the frontend
});

module.exports = router;
