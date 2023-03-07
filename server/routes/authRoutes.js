const express = require("express");
const { Signup, signin } = require("../controllers/authControllers");
const { validator, registerRules, loginRules } = require("../middlewares/validators/bodyValidators");
const router = express.Router();

/**
 *@method POST /auth/signup
 *@description register a new user
 *@access public
 */

router.post("/signup",registerRules ,validator ,Signup)

/**
 *@method POST /auth/signin
 *@description login user
 *@access public
 */

 router.post("/signin", loginRules ,validator ,signin)

module.exports = router