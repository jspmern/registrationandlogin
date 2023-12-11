//this is for the model
let Details = require("../model/registration");
let cloudinary= require('../../config/cloudinary')

let registor=async (req, res) => {
    try {
     
       let result2=await cloudinary.uploader.upload(req.file.path)
       let data = new Details({ ...req.body, profilePicture:result2.url});
       let result = await data.save();
      res.send({ msg:true });
    } catch (e) {
      res.status(401).send({ msg:e });
    }
  }
  module.exports=registor