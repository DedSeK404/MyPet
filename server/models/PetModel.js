const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: { type: String },
  birth_date: { type: Date },
  gender: { type: String },
  tag: { type: String },
  breed: { type: String },
  created_on: { type: Date, default: Date.now() },
  img: {
    type: String,
    default:
      "https://cdn.dribbble.com/users/458522/screenshots/15252882/media/b8ec8a7867ffb2f53f4689edc222e1a1.png?compress=1&resize=400x400",
  },
  user: { type: mongoose.Types.ObjectId, ref: "users" },
});

const PetModel = mongoose.model("pets", petSchema);

module.exports = PetModel;
