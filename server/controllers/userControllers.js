const userModel = require("../models/userModel");
const { hashPwd, comparePwd } = require("../tools/PasswordHandler");
const mail = require("../tools/email");
const passwordmail = require("../tools/passwordemail");

module.exports.updateuser = async (req, res) => {
  const { email } = req.body;
  const { iduser } = req.params;

  const url = `${req.protocol}://${req.get("host")}`;
  try {
    if (req.body.code) {
      const user = await userModel.findById(iduser);
      console.log(user);
      const { code } = req.body;
      if (user.code == code) {
        const activeUser = await userModel.findByIdAndUpdate(
          iduser,
          {
            $unset: { activated: "", code: "" },
          },
          { new: true }
        );
      } else {
        return res.send({ msg: "Wrong code" });
      }
      const newuser = await userModel.findById(iduser);
      return res.send({ msg: "Account activated" });
    }

    const image = req.file ? { img: `${url}/${req.file.path}` } : "";
    const data = req.body;
    Object.keys(data).forEach((key) => {
      if (data[key] == "") {
        delete data[key];
      }
    });

    const { email } = data;

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
        ...image,
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
  try {
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

module.exports.updatePassword = async (req, res) => {
  try {
    const { iduser } = req.params;
    const { password } = req.body;
    const { oldpassword } = req.body;

    const hashPassword = await hashPwd(password);
    const existingUser = await userModel.findOne({ _id: iduser });

    const match = await comparePwd(oldpassword, existingUser.password);

    if (!match) {
      return res.send({ msg: "the old password you entered is incorrect" });
    }

    const user = await userModel.findByIdAndUpdate(
      iduser,
      {
        password: hashPassword,
      },
      { new: true }
    );
    res.send({ msg: "password changed successfully" });
  } catch (error) {
    res.send({ msg: error.message });
  }
};

module.exports.getUserCode = async (req, res) => {
  try {
    const { userID } = req.params;
    const user = await userModel.find({ _id: userID });

    const { first_name } = user[0];
    const { code } = user[0];
    const { email } = user[0];

    mail(first_name, code, email);
    res.send({ msg: "Code resent successfully" });
  } catch (error) {
    res.send({ msg: error.message });
  }
};

module.exports.resetPassword = async (req, res) => {
  const { new_password } = req.body;
    const { confirm_password } = req.body;
    const { reset_password } = req.body;
  try {
    
    console.log(req.body)
    const user = await userModel.findOne({ reset_code:reset_password  });
    console.log(user)
    if (user) {
      if (new_password==confirm_password&&new_password!=""&&confirm_password!="") {
        
        const hashPassword = await hashPwd(new_password);
console.log(hashPassword)
        const updateuserpassword = await userModel.findOneAndUpdate(
          {reset_code:reset_password},
          {
            password: hashPassword,
          },
          { new: true }
        );
        res.send({ msg: "password changed successfully" });

      } else {
        res.send({ msg: "passwords do not match" })
      }


    }else{res.send({ msg: "reset code does not match the code we sent you" })}
    
  } catch (error) {
    res.send({ msg: error.message });
  }
};

module.exports.sendResetEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.find({ email });
    if (user) {
      const Founduser = await userModel.updateOne(
        { email: user[0].email },
        {
          $set: { reset_code: req.body.reset_code },
        },
        { new: true ,upsert:true }
      );
      console.log(Founduser);

      const { first_name } = user[0];

      const { email } = user[0];

      passwordmail(first_name, req.body.reset_code, email);
      res.send({ msg: "Code sent successfully" });
    } else {
      return res.send({ msg: "No user found" });
    }
  } catch (error) {
    res.send({ msg: "No user found" });
  }
};
