const express = require("express");
const {
  updateuser,
  deleteUser,
  getallSitters,
  updateuserAvailability,
  updatePassword,
  getUserCode,
  resetPassword,
  sendResetEmail,
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


/**
 * @route get /user/:userID
 * @description get user for resend activation code
 * @access protected
 */
router.get("/:userID", getUserCode);

/**
 * @route patch /user/password/reset/
 * @description reset password
 * @access private
 */
router.put(
  "/password/reset/",   
  resetPassword 
);

/**
 * @route patch /user/reset/email
 * @description send reset email
 * @access private
 */
router.patch(
  "/reset/email",   
  sendResetEmail
);

module.exports = router;
