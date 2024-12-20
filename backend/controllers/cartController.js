// controllers/cartController.js
const Cart = require('../models/cartModel');

// Add to Cart
exports.addToCart = async (req, res) => {
  const { userId, productId, quantity, price } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [], totalPrice: 0 });
    }

    const productIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (productIndex > -1) {
      cart.items[productIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity, price });
    }

    cart.totalPrice = cart.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    await cart.save();
    res.status(200).json({ message: 'Product added to cart', cart });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Cart
exports.getCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.findOne({ userId }).populate('items.productId');
    if (!cart || cart.items.length === 0) {
      return res.status(200).json({ message: 'Cart is empty', totalItems: 0 });
    }
   
    res.status(200).json({items:cart,totalItems:cart.items.length});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Item Quantity
exports.updateCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const productIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (productIndex > -1) {
      cart.items[productIndex].quantity = quantity;
      cart.totalPrice = cart.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      await cart.save();
      res.status(200).json({ message: 'Cart updated', cart });
    } else {
      res.status(404).json({ message: 'Product not found in cart' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remove Item from Cart
exports.removeFromCart = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId
    );

    cart.totalPrice = cart.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    await cart.save();
    res.status(200).json({ message: 'Product removed from cart', cart });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
