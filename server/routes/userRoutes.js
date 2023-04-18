const express = require("express");
const {
  updateuser,
  deleteUser,
  getallSitters,
  updateuserAvailability,
  updatePassword,
} = require("../controllers/userControllers");
const filterUsers = require("../middlewares/filterUsers");
const upload = require("../tools/multer");
const IsAuth = require("../middlewares/authorization/IsAuth");
const { editUserRules, validator } = require("../middlewares/validators/bodyValidators");
const router = express.Router();

/**
 * @route patch /user/:iduser
 * @description update user
 * @access private
 */
router.patch(
  "/:iduser",
  upload("users").single("img"),
  //  editUserRules,
  //  validator, 
 
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
 
  deleteUser
);

/**
 * @route get /user/
 * @description get all sitters
 * @access protected
 */
router.get("/", filterUsers,  getallSitters);

/**
 * @route patch /user/available/:iduser
 * @description update user availablility
 * @access private
 */
router.patch(
  "/available/:iduser",   
  updateuserAvailability
);

/**
 * @route patch /user/password/:iduser
 * @description update password
 * @access private
 */
router.patch(
  "/password/:iduser",   
  updatePassword
);

module.exports = router;
