const userModel = require("../models/userModel");

module.exports.updateuser = async (req, res) => {
  // const { email } = req.body;
  const url = `${req.protocol}://${req.get("host")}`;
  try {
    // const existingEmail = await userModel.findOne({ email });
    // if (existingEmail) {
    //   return res.status(400).send({ msg: "email already exists" });
    // }
    const { iduser } = req.params;
    const user = await userModel.findByIdAndUpdate(
      iduser,
      {
        ...req.body,
        img: `${url}/${req.file.path}`,
      },
      { new: true }
    );
    res.send({ updateduser: user });
  } catch (error) {
    res.send({ msg: error.message });
  }
};

module.exports.deleteUser = async (req, res) => {
    try {
      const { userid } = req.params;
  
      const user = await userModel.findByIdAndRemove(userid);
      res.send({ msg: "user profile deleted successfully" });
    } catch (error) {
      res.send({ msg: error.message });
    }
  };
