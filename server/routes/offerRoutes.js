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
const {
  PostOfferRules,
  validator,
} = require("../middlewares/validators/bodyValidators");
const isOwner = require("../middlewares/authorization/IsOwner");
const IsAuth = require("../middlewares/authorization/IsAuth");
const router = express.Router();

/**
 * @route POST /offer/add
 * @description add new offer
 * @access protected(authentifié+role:client)
 */
router.post("/add", PostOfferRules, validator, isOwner, IsAuth(), postOffer);

/**
 * @route get /offer/
 * @description get all offers
 * @access protected(authentifié)
 */
router.get("/", IsAuth(), getallOffers);

/**
 * @route get /offer/pet/:petID
 * @description get one pet
 * @access protected(authentifié)
 */
router.get("/pet/:petID", IsAuth(), getonePet);

/**
 * @route get offer/user/
 * @description get all owners
 * @access protected(authentifié)
 */
router.get("/user", IsAuth(), getallOwners);

/**
 * @route patch /offer/edit
 * @description update  offer
 * @access protected(authentifié)
 */
router.patch("/edit", IsAuth(), updateOffer);
/**
 * @route delete /offer/delete
 * @description delete  offer
 * @access protected(authentifié)
 */

router.delete("/delete/:offerid", IsAuth(), deleteOffer);

/**
 * @route get /offer/unique/:sitterid
 * @description get unique reviews
 * @access protected(authentifié)
 */
router.get("/unique/:sitterid", filterOffers, IsAuth(), getUniqueOffers);

module.exports = router;
