const express = require("express");
const {
  updateuser,
  deleteUser,
  getallSitters,
} = require("../controllers/userControllers");
const filterUsers = require("../middlewares/filterUsers");
const upload = require("../tools/multer");
const IsAuth = require("../middlewares/authorization/IsAuth");
const router = express.Router();

/**
 * @route patch /user/:iduser
 * @description update user
 * @access private
 */
router.patch(
  "/:iduser",
  upload("users").single("img"),
  // editUserRules,
  // validator,
  IsAuth(), 
  updateuser
);

/**
 * @route delete /user/delete
 * @description delete  user
 * @access protected
 */

router.delete(
  "/delete/:userid",
  //  IsAuth(),
  //   isAdmin,
  IsAuth(),
  deleteUser
);

/**
 * @route get /user/
 * @description get all sitters
 * @access protected
 */
router.get("/", filterUsers, IsAuth(), getallSitters);

module.exports = router;
