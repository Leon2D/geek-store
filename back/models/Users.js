const { Int32 } = require("bson");
const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  lastName: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: false, default: false },
  isActivate: { type: Boolean, required: false, default: true },
});

//Export the model
module.exports = mongoose.model("users", userSchema);
