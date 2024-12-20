const Product = require("../models/productModel");

// Get all products
// const getProducts = async (req, res) => {
//   try {
//     const products = await Product.find().populate("category", "name");
//     res.status(200).json(products);
//   } catch (error) {
//     console.error("Error fetching products:", error.message);
//     res
//       .status(500)
//       .json({ message: "Error fetching products", error: error.message });
//   }
// };


const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("category", "name");

    // Append the full URL to the image path
    const updatedProducts = products.map(product => ({
      ...product.toObject(),
      image: product.image
        ? `${req.protocol}://${req.get("host")}/${product.image.replace(/\\/g, "/")}`
        : null,
    }));

    res.status(200).json(updatedProducts);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ message: "Error fetching products", error: error.message });
  }
};




// Get a product by ID
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id).populate("category", "name");

    if (!product) return res.status(404).json({ message: "Product not found" });

    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error.message);
    res
      .status(500)
      .json({ message: "Error fetching product", error: error.message });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  try {
    const { name, description, price, discountPrice, category } = req.body;

    // Validate required fields
    if (!name || !description || !price || !discountPrice || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Handle file upload
    const image = req.file ? req.file.path : null;

    // Create a new product instance
    const newProduct = new Product({
      name,
      description,
      price: parseFloat(price), // Ensure price is a number
      discountPrice: parseFloat(discountPrice), // Ensure discount price is a number
      category,
      image,
    });

    // Save to database
    const savedProduct = await newProduct.save();

    // Respond with the created product
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Error creating product:", error.message, error.stack);

    // Handle specific errors (optional)
    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "Validation error", error: error.message });
    }

    // Generic error response
    res
      .status(500)
      .json({ message: "Error creating product", error: error.message });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedData = req.body;
    if (req.file) {
      updatedData.image = req.file.path; // Update image if provided
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, {
      new: true,
    }).populate("category", "name");

    if (!updatedProduct)
      return res.status(404).json({ message: "Product not found" });

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error.message);
    res
      .status(500)
      .json({ message: "Error updating product", error: error.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct)
      return res.status(404).json({ message: "Product not found" });

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error.message);
    res
      .status(500)
      .json({ message: "Error deleting product", error: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
