const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 3 },
    email: { type: String, required: true, unique: true , lowercase : true, match : /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    mobile: { type: String, required: true, unique: true , match: /^[6-9]\d{9}$/ },
    password: { type: String, required: true, unique: true, minlength:6 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
