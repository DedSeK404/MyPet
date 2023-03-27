const offerModel = require("../models/OfferModel");
const filterOffers = async (req, res, next) => {
  try {
    const { status } = req.query; 
    console.log(status)

    let uniqueOffers = [];
if (status) {
  uniqueOffers = await offerModel.find({ status: status });
 return res.send({ uniqueOffers }); 
}
   

    next();
  } catch (error) {
    res.send({ msg: error.message });
  }
};
module.exports = filterOffers;
