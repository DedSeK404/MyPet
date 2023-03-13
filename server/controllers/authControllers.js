const userModel = require("../models/userModel");
const { hashPwd, comparePwd } = require("../tools/PasswordHandler");
const createtoken = require("../tools/Token");

module.exports.Signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ msg: "user already exists" });
    }
    const hashed = await hashPwd(password);
    const user = new userModel({ ...req.body, password: hashed });
    await user.save();
    res.send({ msg: "user successfully created" });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};

module.exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (!existingUser) {
      return res.status(400).send({
        msg: "there is no account linked to this email, please make sure that you type the email correctly",
      });
    }
    const match = comparePwd(password, existingUser.password);
    if (!match) {
      return res.status(400).send({ msg: "the password you entered is wrong" });
    }
    const payload = { userID: existingUser._id };
    const token = createtoken(payload);
    existingUser.password = undefined;
    res.send({
      token,
      msg: "user succsessfully logged in",
      user: existingUser,
    });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};

module.exports.getCurrentUser = (req, res) => {
  try {
    res.send({ user: req.user });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};

module.exports.updateuser = async (req, res) => {
  const { email } = req.body;
  try {
    const existingEmail = await userModel.findOne({ email });
    if (existingEmail) {
      return res.status(400).send({ msg: "email already exists" });
    }
    const { iduser } = req.params;
    const user = await userModel.findByIdAndUpdate(
      iduser,
      {
        ...req.body,
      },
      { new: true }
    );
    res.send({ updateduser: user });
  } catch (error) {
    res.send({ msg: error.message });
  }
};
