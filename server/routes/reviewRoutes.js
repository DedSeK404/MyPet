const express = require("express");
const {
  addreview,
  getAllReviews,
  getUniqueReviews,
} = require("../controllers/reviewControllers");
const isOwner = require("../middlewares/authorization/IsOwner");
const IsAuth = require("../middlewares/authorization/IsAuth");
const router = express.Router();

/**
 * @route POST /review/add
 * @description post review
 * @access protected(authentifié+role:client)
 */
router.post("/add", isOwner, IsAuth(), addreview);

/**
 * @route get /review/
 * @description get all reviews
 * @access protected(authentifié)
 */
router.get("/", IsAuth(), getAllReviews);

/**
 * @route get /review/unique/:sitterid
 * @description get unique reviews
 * @access protected(authentifié)
 */
router.get("/unique/:sitterid", IsAuth(), getUniqueReviews);

module.exports = router;
