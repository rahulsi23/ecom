const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true }, // Ensure this matches your Category model
  price: { type: Number, required: true },
  discountPrice: { type: Number, required: true },
  image: { type: String, required: false }, // Path to the image
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
