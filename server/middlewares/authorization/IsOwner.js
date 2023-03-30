const IsAuth = require("./IsAuth");

const isAuthorized = async (req, res, next) => {
  
  try {
    if (req?.user.role != "client") {
      console.log(req?.user.role)
      return res.status(403).send({ msg: "you are not authorized" });
    }

    next();
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};
module.exports = isAuthorized; 
