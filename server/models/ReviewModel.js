const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  review: { type: String },
  rating: { type: Number },
  client: { type: mongoose.Types.ObjectId, ref: "users" },
  sitter: { type: mongoose.Types.ObjectId, ref: "users" },
  created_on: { type: Date, default: Date.now() },
  first_name:{ type: String },
  last_name:{ type: String },
  img:{ type: String }
});

const ReviewModel = mongoose.model("reviews", ReviewSchema);

module.exports = ReviewModel;
