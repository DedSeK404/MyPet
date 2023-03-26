const petModel = require("../models/PetModel");
// add product
module.exports.addPet = async (req, res) => {
  try {
    const url = `${req.protocol}://${req.get("host")}`;

    //console.log(url);
    const { name } = req.body;
   
    const existPet = await petModel.find({ user: req.user._id });

    const existingPet = existPet.find((el) => el.name == name);

    if (existingPet) {
      return res.status(400).send({ msg: "Pet is already added" });
    }
    const newPet = new petModel({
      ...req.body,
      img: `${url}/${req.file.path}`,
      user: req.user._id,
    });
    await newPet.save();
    res.send({ msg: "pet added successfuly" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};
module.exports.getallpets = async (req, res) => {
  try {
    const pets = await petModel.find({});

    res.send({ pets });
  } catch (error) {
    res.send({ msg: error.message });
  }
};

module.exports.updatePet = async (req, res) => {
  try {
    const { idpet } = req.body;
    const url = `${req.protocol}://${req.get("host")}`;
    //console.log(req)
    const pet = await petModel.findByIdAndUpdate(
      idpet,
      {
        $set: {
          ...req.body,
          img: `${url}/${req.file.path}`,
        },
      },
      { new: true }
    );
    res.send({ pet: pet, msg: "Changes saved" });
  } catch (error) {
    res.send({ msg: error.message });
  }
};

module.exports.deletePet = async (req, res) => {
  try {
    const { petid } = req.params;

    const prod = await petModel.findByIdAndRemove(petid);
    res.send({ msg: "pet profile deleted successfully" });
  } catch (error) {
    res.send({ msg: error.message });
  }
};
