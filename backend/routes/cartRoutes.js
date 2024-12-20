// routes/cart.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Add to Cart
router.post('/add', cartController.addToCart);

// Get Cart
router.get('/:userId', cartController.getCart);

// Update Item Quantity
router.put('/update', cartController.updateCart);

// Remove Item from Cart
router.delete('/remove', cartController.removeFromCart);

module.exports = router;
