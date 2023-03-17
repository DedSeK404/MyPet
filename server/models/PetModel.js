const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: { type: String },
  birth_date: { type: Date },
  gender: { type: String },
  tag: { type: String },
  breed: { type: String },
  created_on: { type: Date, default: Date.now() },
  img: { type: String },
  user: { type: mongoose.Types.ObjectId, ref: "users" }
});

const PetModel = mongoose.model("pets", petSchema);

module.exports = PetModel;
