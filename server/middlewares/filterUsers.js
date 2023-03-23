const userModel = require("../models/userModel");
const filterUsers = async (req, res, next) => {
  try {
    const { city, available } = req.query;

    let sitters = [];
    if (city) {
      sitters = await userModel.find({role: "sitter", city: city });
      return res.send({ sitters });
    } else if (available) {
      sitters = await userModel.find({role: "sitter", status: available });
      return res.send({ sitters });
    }
    next(); 
  } catch (error) {
    res.send({ msg: error.message });
  }
};
module.exports = filterUsers; 
