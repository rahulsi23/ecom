// controllers/categoryController.js
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const app = express();

app.use(express.json());

const Category = require('../models/categoryModel');


const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newCategory = new Category({
      name,
      description,
    });

    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).send("Error creating category");
  }
};


const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).send("Error fetching categories");
  }
};


const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).send("Category not found");
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(500).send("Error fetching category");
  }
};


const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedCategory) {
      return res.status(404).send("Category not found");
    }

    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).send("Error updating category");
  }
};


const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCategory = await Category.findByIdAndDelete(id);

    if (!deletedCategory) {
      return res.status(404).send("Category not found");
    }

    res.status(200).send("Category deleted successfully");
  } catch (error) {
    res.status(500).send("Error deleting category");
  }
};

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};