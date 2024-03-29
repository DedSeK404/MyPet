const userModel = require("../models/userModel");
const { hashPwd, comparePwd } = require("../tools/PasswordHandler");
const createtoken = require("../tools/Token");
const mail=require("../tools/email")

module.exports.Signup = async (req, res) => { 
  const { email, password, first_name, code} = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ msg: "user already exists" });
    }


  mail(first_name,code,email)
  

    const hashed = await hashPwd(password);
    const user = new userModel({ ...req.body, password: hashed });
    await user.save();
    res.send({ msg: "user successfully created",user:user });
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
    
     

    if (existingUser.activated==false) {
      return res.send({
        msg: "Your account is not activated yet",userID:existingUser._id
      });
    }


    const match = await comparePwd(password, existingUser.password);

    if (!match) {
      return res.status(400).send({ msg: "the password you entered is incorrect" });
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

module.exports.getCurrentUserforReview = async (req, res) => { 
  try { 
const {userid}=req.params
const current = await userModel.findOne({ _id:userid })


    res.send( current );
  } catch (error) {
    res.status(500).send({ msg: error.message }); 
  }
};
