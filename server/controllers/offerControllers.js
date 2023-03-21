const offerModel = require("../models/OfferModel");
const petModel = require("../models/PetModel");
const userModel = require("../models/userModel");
// post offer
module.exports.postOffer = async (req, res) => {
  try {
    const newOffer = new offerModel({
      ...req.body,
    });
    await newOffer.save();
    res.send({ msg: "offer posted successfuly" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

module.exports.getallOffers = async (req, res) => {
  try {
    const offers = await offerModel.find({});

    res.send({ offers });
  } catch (error) {
    res.send({ msg: error.message });
  }
};

module.exports.getonePet = async (req, res) => {
  try {
    const { petID } = req.params;
    const pets = await petModel.findById(petID);
    res.send({ pets: pets });
  } catch (error) {
    res.send({ msg: error.message });
  }
};

module.exports.getallOwners = async (req, res) => {
  try {
    const owners = await userModel.find({ role: "client" });

    res.send({ owners });
  } catch (error) {
    res.send({ msg: error.message });
  }
};

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
