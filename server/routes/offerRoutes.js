const express = require("express");
const {
  postOffer,
  getallOffers,
  getonePet,
  getallOwners,
} = require("../controllers/offerControllers");

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
router.get("/", getallOffers);

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

module.exports = router;
