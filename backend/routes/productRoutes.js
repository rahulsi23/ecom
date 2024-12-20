const express = require("express");
const multer = require("multer");
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images"); // Ensure the folder exists
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const FileUpload = multer({ storage });

// Routes
router.route("/").get(getProducts).post(FileUpload.single("image"), createProduct);
router
  .route("/:id")
  .get(getProductById)
  .put(FileUpload.single("image"), updateProduct)
  .delete(deleteProduct);

module.exports = router;
