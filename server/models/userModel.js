const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String },
  password: { type: String },
  birth_date: { type: Date },
  bio: { type: String },
  city: { type: String },
  adress: { type: String },
  gender: { type: String },
  created_on: { type: Date, default: Date.now() },
  phone: { type: Number },
  photo: { type: String },
  isBan: { type: Boolean, default: false },
  role: {
    type: String,
    enum: ["client", "admin", "sitter"],
    default: "client",
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
