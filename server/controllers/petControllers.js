const petModel = require("../models/PetModel");
// add product
module.exports.addPet = async (req, res) => {
  try {
    const url = `${req.protocol}://${req.get("host")}`;

    //console.log(url);
    const { name } = req.body;
   
    const existPet = await petModel.find({ user: req.body.user });

    const existingPet = existPet.find((el) => el.name == name);

    if (existingPet) {
      return res.status(400).send({ msg: "Pet is already added" });
    }
    const image = req.file?{img: `${url}/${req.file.path}`}:"" 
    const data = req.body
    Object.keys(data).forEach(key => {
      if (data[key] == "") {
        delete data[key];
      }
    }); 
    const newPet = new petModel({
      ...data,
      ...image
      
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
    const url = `${req.protocol}://${req.get("host")}`;
    const { idpet } = req.body;
    
    const image = req.file?{img: `${url}/${req.file.path}`}:"" 
    const data = req.body
    Object.keys(data).forEach(key => {
      if (data[key] == "") {
        delete data[key]; 
      }
    }); 
    console.log(data)
    const pet = await petModel.findByIdAndUpdate(
      idpet,
      {
        $set: {
          ...data,
       ...image,
       birth_date: data.birth_date
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
