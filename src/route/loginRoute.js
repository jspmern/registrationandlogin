const express = require('express');
const router = express.Router();  
const {loginTemp,registorController,loginController} = require('../controller/loginController')
let upload=require('../../config/multer')
// Define routes and associate them with controller functions
router.post("/registor", upload.single("profilePicture"),registorController);
//this is for login
router.get('/login',loginTemp)
router.post('/login',loginController)  
module.exports = router;