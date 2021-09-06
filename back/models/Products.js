const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
  p_SKU: { type: String, required: true, unique: true },
  p_name: { type: String, required: true },
  p_description: {
    type: String,
    required: true,
  },
  p_category: {
    categoryId: Number,
    categoryName: String,
  },
  p_value: { type: Number, required: true },
  p_image: { type: String, required: true },
  p_brand: String,
  discounts: {
    is_discounted: Boolean,
    discount_percent: Number,
  },
});

//Export the model
module.exports = mongoose.model("products", userSchema);
