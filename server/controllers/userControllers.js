const userModel = require("../models/userModel");
const { hashPwd, comparePwd } = require("../tools/PasswordHandler");

module.exports.updateuser = async (req, res) => {
  const { email } = req.body;
  const { iduser } = req.params;
  
  
  const url = `${req.protocol}://${req.get("host")}`;
  try {
   
    
   if (req.body.code) {
    const user = await userModel.findById(iduser)
    console.log(user)
    const {code}=req.body
    if (user.code==code) {
      const activeUser = await userModel.findByIdAndUpdate(
        iduser,
        {
          $unset: {activated:"", code:""},
        },
        { new: true }
      );
    }else{
      return res.send({ msg: "Wrong code" });
    }
    const newuser = await userModel.findById(iduser)
    return res.send({ msg: "Account activated" }); 
   }


    
    const image = req.file?{img: `${url}/${req.file.path}`}:""
    const data = req.body
    Object.keys(data).forEach(key => {
      if (data[key] == "") {
        delete data[key];
      }
    });  
  

    const {email}=data
    
    if (email) {
      const existingEmail = await userModel.findOne({ email });
   
    if (existingEmail) {
      return res.status(400).send({ msg: "email already used" });
    } 
    }
    
    const user = await userModel.findByIdAndUpdate(
      iduser,
      {
        ...data,
       ...image
       
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

module.exports.getallSitters = async (req, res) => {
  try {
    const sitters = await userModel.find({ role: "sitter" });

    res.send({ sitters });
  } catch (error) {
    res.send({ msg: error.message });
  }
};



module.exports.updateuserAvailability = async (req, res) => {

    const { iduser } = req.params;
try{
    const user = await userModel.findByIdAndUpdate(
      iduser,
      {
        ...req.body
      },
      { new: true }
    );
    res.send({ updateduser: user });
  } catch (error) {
    res.send({ msg: error.message });
  }
};

module.exports.updatePassword = async (req, res) => { 
  try {
    const { iduser } = req.params;
    const {password}=req.body
    const {oldpassword}=req.body
    
    const hashPassword = await hashPwd(password); 
    const existingUser = await userModel.findOne({ _id:iduser });
   
    const match = await comparePwd(oldpassword, existingUser.password);

    if (!match) {
      return res.send({ msg: "the old password you entered is incorrect" });
    }
    
    const user = await userModel.findByIdAndUpdate(
      iduser,
      {
       password: hashPassword
      },
      { new: true }
    );
    res.send({ msg: "password changed successfully" });
  } catch (error) {
    res.send({ msg: error.message });
  }
};