const express = require("express");
const { addreview, getAllReviews, getUniqueReviews } = require("../controllers/reviewControllers");
const router = express.Router();

/**
 * @route POST /review/add
 * @description post review
 * @access protected(authentifié+role:client)
 */
router.post("/add",addreview);

/**
 * @route get /review/
 * @description get all reviews
 * @access protected(authentifié+role:client)
 */
router.get("/", getAllReviews);

/**
 * @route get /review/unique/:sitterid
 * @description get unique reviews
 * @access protected(authentifié+role:client)
 */
router.get("/unique/:sitterid", getUniqueReviews);

module.exports = router;
