const express = require('express');
const router = express.Router();  
const {loginTemp,registorController,loginController,productController,logouthandler} = require('../controller/loginController')
let upload=require('../../config/multer')
//this is my middlware for checking user is  valid or not
let auth=require('../middleware/auth')
// Define routes and associate them with controller functions
router.post("/registor", upload.single("profilePicture"),registorController);
//this is for login
router.get('/login',loginTemp)
router.post('/login',loginController)  
router.get('/product',auth,productController) 
router.get('/logout',auth,logouthandler)

module.exports = router;