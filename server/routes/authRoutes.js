const express = require("express");
const { Signup, signin, getCurrentUser } = require("../controllers/authControllers");
const IsAuth = require("../middlewares/validators/authorization/IsAuth");
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

/**
 *@method GET /auth/
 *@description  utilisateur authentifié
 *@access private
 */
 router.get("/",IsAuth(), getCurrentUser)
 