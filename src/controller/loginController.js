//this is for the model
let Details = require("../model/registration");
let registor=async (req, res) => {
    try {
      let data = new Details({ ...req.body, profilePicture: req.file.filename });
      let result = await data.save();
      console.log(result);
  
      res.send({ msg:true });
    } catch (e) {
      res.status(401).send({ msg:e });
    }
  }
  module.exports=registor