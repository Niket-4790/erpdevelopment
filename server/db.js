const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  product_id: { type: String, required: true, unique: true }, 
  name: { type: String, required: true }, 
  category: { type: String, required: true }, 
  price: { type: Number, required: true }, 
  stock: { type: Number, required: true }, 
  rating: { type: Number, required: true, min: 0, max: 5 }, 
  details: {
    brand: { type: String, required: true }, 
    model: { type: String, required: true }, 
    color: { type: String, required: true }, 
    connectivity: { type: String, required: true }, 
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
