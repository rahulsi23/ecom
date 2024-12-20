// routes/categoryRoutes.js

const express = require('express');
const {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryController');

const router = express.Router();

router.route('/').get(getCategories).post(createCategory);
router.route('/:id').get(getCategoryById).put(updateCategory).delete(deleteCategory);

module.exports = router;
