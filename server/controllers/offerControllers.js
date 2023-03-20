const offerModel = require("../models/OfferModel");
// post offer
module.exports.postOffer = async (req, res) => {
  try {
    const newOffer = new offerModel({
      ...req.body,
      client: req.user._id,
      sitter: req.sitter,
      pet: req.pet,
    });
    await newOffer.save();
    res.send({ msg: "offer posted successfuly" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};
// module.exports.getallpets = async (req, res) => {
//   try {
//     const pets = await petModel.find({});

//     res.send({ pets });
//   } catch (error) {
//     res.send({ msg: error.message });
//   }
// };
// module.exports.getoneprod = async (req, res) => {
//   try {
//     const { idprod } = req.params;
//     const prod = await productmodel.findById(idprod);
//     res.send({ product: prod });
//   } catch (error) {
//     res.send({ msg: error.message });
//   }
// };
// module.exports.updatePet = async (req, res) => {
//   try {
//     const { idpet } = req.body;
//     const url = `${req.protocol}://${req.get("host")}`;
//     console.log(req)
//     const pet = await petModel.findByIdAndUpdate(
//       idpet,
//       {
//         $set: {
//           ...req.body,
//           img: `${url}/${req.file.path}`,
//         },
//       },
//       { new: true }
//     );
//     res.send({ pet: pet, msg: "Changes saved" });
//   } catch (error) {
//     res.send({ msg: error.message });
//   }
// };

// module.exports.deletePet = async (req, res) => {
//   try {
//     const { petid } = req.params;

//     const prod = await petModel.findByIdAndRemove(petid);
//     res.send({ msg: "pet profile deleted successfully" });
//   } catch (error) {
//     res.send({ msg: error.message });
//   }
// };
