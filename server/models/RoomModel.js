const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({ 
  messages: [
    {
      role: { type: String },
      message: { type: String },
      created_on: { type: String },
    },
  ],
  client: { type: mongoose.Types.ObjectId, ref: "users" },
  sitter: { type: mongoose.Types.ObjectId, ref: "users" },
  created_on: { type: Date, default: Date.now() },
});

const RoomModel = mongoose.model("room", RoomSchema);

module.exports = RoomModel;
