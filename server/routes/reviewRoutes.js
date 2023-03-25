const express = require("express");
const { addreview, getAllReviews } = require("../controllers/reviewControllers");
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

module.exports = router;
