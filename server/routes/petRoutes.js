const express = require("express");
const {
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


const router = express.Router();

/**
 * @route POST /pet/add
 * @description add new pet
 * @access protected(authentifié+role:client)
 */
router.post(
  "/add",  
  upload("pets").single("img"),
  AddPetRules,
  validator,
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
  upload("editpet").single("img"),
  AddPetRules,
  validator,
  updatePet
);
/**
 * @route delete /pet/delete
 * @description delete  pet
 * @access protected
 */

router.delete("/delete/:petid",   deletePet);

module.exports = router;
