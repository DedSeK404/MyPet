const express = require("express");
const { updateuser, deleteUser } = require("../controllers/userControllers");
const upload = require("../tools/multer");
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

module.exports = router
