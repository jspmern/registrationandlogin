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
    let token = await data.generateToken();
    //the res.cookie() function is used to set the cookie name to value.
    //the value parameter may be a string or object converted to json
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 50000),
      httpOnly: true,
    });
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
    let isMatch = await bcrypt.compare(password, findData.password);
    let token = await findData.generateToken();
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 50000),
      httpOnly: true,
    });
    if (isMatch) {
      res.send({ msg: "done" });
    } else {
      res.send({ msg: "password incorrect" });
    }
  } else {
    res.send({ msg: "user is not found" });
  }
};
let productController = (req, res) => {
  let token=req.cookies.jwt
  console.log(token)
  let productPath = path.join(__dirname, "../public/product.html");
  res.sendFile(productPath);
};
let logouthandler = async (req, res) => {
  console.log(req.user)
  req.user.tokens=req.user.tokens.filter((item)=>{
    return item.token !==req.token
  })
  res.clearCookie('jwt')
  await req.user.save()
  let loginPath = path.join(__dirname, "../public/login.html");
  res.sendFile(loginPath);
};
module.exports = {
  registorController,
  loginTemp,
  loginController,
  productController,
  logouthandler,
};
