const offerModel = require("../models/OfferModel");
const petModel = require("../models/PetModel");
const userModel = require("../models/userModel");
// post offer
module.exports.postOffer = async (req, res) => { 

  const { sitter } = req.body;
 
   
  try {
    const userAvailable = await userModel.findOne({ _id:sitter });
    if (userAvailable.status=="unavailable"||userAvailable.status=="busy") {
      return res.send({ msg: "Sitter is currently unavailable for work" }); 
    }

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

module.exports.updateOffer = async (req, res) => {
  try {
    const { idoffer } = req.body;
    const { status } = req.body;

    const offerState = await offerModel.findOne({ _id:idoffer });
    
    if (offerState==null) {
      return res.send({ msg: "The Sitter deleted the offer" });   
    } 


    const offerStatus = await offerModel.findByIdAndUpdate(
      idoffer,
      {
        $set: {
          ...req.body,
        },
      },
      { new: true }
    );
    res.send({
      offerStatus: offerStatus,
      msg:
        status == "active"
          ? "Offer accepted"
          : status == "declined"
          ? "Offer declined"
          : "",
    });
  } catch (error) {
    res.send({ msg: error.message });
  }
};

module.exports.deleteOffer = async (req, res) => {
  
  try {
    const { offerid } = req.params; 

    const offerStatus = await offerModel.findOne({ _id:offerid });
    
    if (offerStatus.status=="declined"||offerStatus.status=="active") {
      return res.send({ msg: "The Sitter already accepted or declined the offer" });   
    }


    const deleteOffer = await offerModel.findByIdAndRemove(offerid);
    res.send({ msg: "offer deleted successfully" });
  } catch (error) {
    res.send({ msg: error.message });
  }
};

module.exports.getUniqueOffers = async (req, res) => {
  const { sitterid } = req.params;
  const user = await userModel.findOne({ _id: sitterid });


  try {
    if (user.role == "sitter") {
      const uniqueOffers = await offerModel.find({ sitter: sitterid });
      res.send({ uniqueOffers });
    } else if (user.role == "client") {
      const uniqueOffers = await offerModel.find({ client: sitterid });
      res.send({ uniqueOffers });
    }
  } catch (error) {
    res.send({ msg: error.message }); 
  }
};
