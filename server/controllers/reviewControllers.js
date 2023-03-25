const reviewModel = require("../models/ReviewModel");
module.exports.addreview = async (req, res) => {
  try {
    const review = new reviewModel({
      ...req.body,
    });
    await review.save();
    res.send({ msg: "Review posted" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

module.exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await reviewModel.find({});

    res.send({ reviews });
  } catch (error) {
    res.send({ msg: error.message });
  }
};
