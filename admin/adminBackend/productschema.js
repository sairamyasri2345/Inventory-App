const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  quantity: { type: Number, required: true },
  description: { type: String, required: true },
});

mongoose.model("Product", productSchema);
