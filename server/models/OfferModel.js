const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
  description: { type: String },
  start_date: { type: Date },
  end_date: { type: Date },
  price: { type: String },
  created_on: { type: Date, default: Date.now() },
  client: { type: mongoose.Types.ObjectId, ref: "users" },
  sitter: { type: mongoose.Types.ObjectId, ref: "users" },
  pet: { type: mongoose.Types.ObjectId, ref: "pets" },
});

const OfferModel = mongoose.model("offers", OfferSchema);

module.exports = OfferModel;
