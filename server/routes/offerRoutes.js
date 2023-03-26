const express = require("express");
const {
  postOffer,
  getallOffers,
  getonePet,
  getallOwners,
  updateOffer,
  deleteOffer,
  getUniqueOffers,
} = require("../controllers/offerControllers");
const filterOffers = require("../middlewares/filterOffers");

const router = express.Router();

/**
 * @route POST /offer/add
 * @description add new offer
 * @access protected(authentifié+role:client)
 */
router.post("/add", postOffer);

/**
 * @route get /offer/
 * @description get all offers
 * @access protected(authentifié+role:client)
 */
router.get("/",filterOffers, getallOffers);

/**
 * @route get /offer/pet/:petID
 * @description get one pet
 * @access public
 */
router.get("/pet/:petID", getonePet);

/**
 * @route get offer/user/
 * @description get all owners
 * @access protected
 */
router.get("/user", getallOwners);

/**
 * @route patch /offer/edit
 * @description update  offer
 * @access protected
 */
router.patch("/edit", updateOffer);
/**
 * @route delete /offer/delete
 * @description delete  offer
 * @access protected
 */

router.delete(
  "/delete/:offerid",
  //  IsAuth(),
  //   isAdmin,
  deleteOffer
);

/**
 * @route get /offer/unique/:sitterid
 * @description get unique reviews
 * @access protected(authentifié+role:client)
 */
router.get("/unique/:sitterid", getUniqueOffers);

module.exports = router;
