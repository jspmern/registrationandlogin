let express = require("express");
let app = express();
let path = require("path");
//this is for setting the request
app.use(express.json());
//this bcrypt
let bcrypt = require("bcryptjs");
//this is for the model
let Details = require("../model/registration");
let cloudinary = require("../../config/cloudinary");
let registorController = async (req, res) => {
  try {
    let result2 = await cloudinary.uploader.upload(req.file.path);
    let data = new Details({ ...req.body, profilePicture: result2.url });
    let result = await data.save();
    res.send({ msg: true });
  } catch (e) {
    res.status(401).send({ msg: e });
  }
};
let loginTemp = (req, res) => {
  let templatePath = path.join(__dirname, "../public/login.html");
  res.sendFile(templatePath);
};
let loginController = async (req, res) => {
  // userName: 'fjkdjk', password: 'fjdj'
  let { email, password } = req.body;
  let findData = await Details.findOne({ email: email });
  if (findData) {
    console.log(findData)
    let isMatch =  await bcrypt.compare(password, findData.password);
    console.log(isMatch)
    if (isMatch) {
      res.send({ msg: "sucuessfully login" });
    } else {
      res.send({ msg: "password incorrect" });
    }
  } else {
    res.send({ msg: "user is not found" });
  }
};
module.exports = { registorController, loginTemp, loginController };
