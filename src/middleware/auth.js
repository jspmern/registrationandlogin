const jwt = require("jsonwebtoken");
let path = require("path");
let dotenv = require("dotenv").config({
  path: path.join(__dirname, "../../.env"),
});
const Register = require("../model/registration");
const auth = async (req, res, next) => {
  try {
    console.log("hii i am auth");
    const token = req.cookies.jwt;
    const verifyUser = jwt.verify(token, process.env.SERECT_KEY);
    const user = await Register.findOne({ _id: verifyUser._id });
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send(error);
  }
};
module.exports = auth;
