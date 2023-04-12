const userModel = require("../models/userModel");

module.exports.updateuser = async (req, res) => {
  const { email } = req.body;
  
  
  const url = `${req.protocol}://${req.get("host")}`;
  try {
   
    
    const { iduser } = req.params;
    const image = req.file?{img: `${url}/${req.file.path}`}:""
    const data = req.body
    Object.keys(data).forEach(key => {
      if (data[key] == "") {
        delete data[key];
      }
    });  
  

    const {email}=data
    console.log(email)
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
