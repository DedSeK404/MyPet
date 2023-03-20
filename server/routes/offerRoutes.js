const express = require("express");

const router = express.Router();

/**
 * @route POST /offer/add
 * @description add new offer
 * @access protected(authentifié+role:client)
 */
router.post("/add");
// /**
//  * @route get /pet/
//  * @description get all pets
//  * @access protected(authentifié+role:client)
//  */
// router.get("/", getallpets);
// // /**
// //  * @route get /product/:idprod
// //  * @description get one product
// //  * @access public
// //  */
// // router.get("/:idprod", getonepet);

// /**
//  * @route patch /pet/edit
//  * @description update  pet
//  * @access protected
//  */
// router.patch(
//   "/edit",

//   //isOwner,
//   //AddProductRules,
//   validator,
//   upload("editpet").single("img"),
//   updatePet
// );
// /**
//  * @route delete /pet/delete
//  * @description delete  pet
//  * @access protected
//  */

// router.delete(
//   "/delete/:petid",
//   //  IsAuth(),
//   //   isAdmin,
//   deletePet
// );
module.exports = router;
