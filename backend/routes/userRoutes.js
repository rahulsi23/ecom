const express = require('express');
const router = express.Router();
const {
  signup,
  login,
  getUserProfile,
  updateProfile,
  deleteAccount
} = require('../controllers/userController');
const verifyToken = require('../middleware/Verify'); // Import verifyToken middleware

// Public routes
router.post("/signup", signup); // Route for user signup
router.post("/login", login);   // Route for user login

// Protected routes
router.get("/profile", verifyToken, getUserProfile);  // Get user profile
router.put("/profile", verifyToken, updateProfile);   // Update user profile
router.delete("/account", verifyToken, deleteAccount); // Delete user account

module.exports = router;
