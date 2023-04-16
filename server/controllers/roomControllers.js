const RoomModel = require("../models/RoomModel");
module.exports.addRoom = async (req, res) => {
  const { sitter } = req.body;
  const { client } = req.body;
  const existingChat = await RoomModel.findOne({
    sitter: sitter,
    client: client,
  });

  if (existingChat) {
    return res
      .send({ msg: "You already started a chat with this seller" })
      .status(400);
  }

  try {
    const room = new RoomModel({
      ...req.body,
    });
    await room.save();
    res.send({ msg: "Message sent" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

module.exports.getAllMessages = async (req, res) => {
  try {
    const messages = await RoomModel.find({});

    res.send({ messages });
  } catch (error) {
    res.send({ msg: error.message });
  }
};

module.exports.pushMessages = async (req, res) => {
  try {
    const { roomID } = req.body;
    const messages = req.body.messages;

    const findRoom = await RoomModel.findOneAndUpdate(
      { _id: roomID },
      {
        $push: {
          messages,
        },
      },
      { new: true }
    );
  } catch (error) {
    res.send({ msg: error.message });
  }
};

module.exports.deleteRoom = async (req, res) => {
  try {
    const { roomID } = req.params;

    const room = await RoomModel.findByIdAndRemove(roomID);
    res.send({ msg: "Conversation deleted successfully" });
  } catch (error) {
    res.send({ msg: error.message });
  }
};


module.exports.clearMessages = async (req, res) => {
  try {
    const { roomID } = req.params;
    

    const findRoom = await RoomModel.findOneAndUpdate(
      { _id: roomID },  
      {
        $set: {
          messages:[]
        },
      },
      { new: true }
    );
  } catch (error) {
    res.send({ msg: error.message });
  }
};