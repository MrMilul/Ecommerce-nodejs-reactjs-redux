const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  discount:{type: Number}, 
  img: { type: String },
  desc: { type: String },
  countInStock: { type: Number },
  ingredientes: { type: String },
  raiting: { type: Number },
  numReview: { type: String },
  featured: {type: Boolean, default: false},
  isVegan: {type: Boolean, default: false},
});

 module.exports = mongoose.model("Products", productsSchema);

