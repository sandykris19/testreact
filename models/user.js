const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  height: Number,
});

const User = mongoose.model("user", userSchema);

module.exports = User;
