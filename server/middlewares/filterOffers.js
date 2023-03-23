const offerModel = require("../models/OfferModel");
const filterOffers = async (req, res, next) => {
  try {
    const { status } = req.query;

    let offers = [];
if (status) {
  offers = await offerModel.find({ status: status });
 return res.send({ offers }); 
}
   

    next();
  } catch (error) {
    res.send({ msg: error.message });
  }
};
module.exports = filterOffers;
