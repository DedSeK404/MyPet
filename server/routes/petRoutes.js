const express = require("express");
const {
  //   getallproducts,
  //   getoneprod,
  //   deleteprod,
  //   updateprod,
  addProduct,
  addPet,
  getallpets,
  updatePet,
  deletePet,
} = require("../controllers/petControllers");

const upload = require("../tools/multer");

const isOwner = require("../middlewares/authorization/IsOwner");
const IsAuth = require("../middlewares/authorization/IsAuth");
const {
  validator,
  AddPetRules,
} = require("../middlewares/validators/bodyValidators");
const isAuthorized = require("../middlewares/authorization/IsOwner");
// const upload = require("../utils/multer");
const router = express.Router();

/**
 * @route POST /pet/add
 * @description add new pet
 * @access protected(authentifié+role:client)
 */
router.post(
  "/add",
  IsAuth(),
  isOwner,
  // AddPetRules,
  // validator,
  upload("pets").single("img"),
  addPet
);
/**
 * @route get /pet/
 * @description get all pets
 * @access protected(authentifié+role:client)
 */
router.get("/", getallpets);


/**
 * @route patch /pet/edit
 * @description update  pet
 * @access protected
 */
router.patch(
  "/edit",
  
  //isOwner,
  //AddProductRules,
  validator,
  upload("editpet").single("img"),
  updatePet
);
/**
 * @route delete /pet/delete
 * @description delete  pet
 * @access protected
 */

router.delete(
  "/delete/:petid",
  //  IsAuth(),
  //   isAdmin,
  deletePet
);
module.exports = router;
