const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController')
let upload=require('../../config/multer')
// Define routes and associate them with controller functions
router.post("/registor", upload.single("profilePicture"),loginController);
//this is for login
module.exports = router;