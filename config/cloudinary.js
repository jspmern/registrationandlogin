let cloudinary = require("cloudinary").v2;
let path = require("path");
const dotenvPath = path.resolve(__dirname, '../.env');
require('dotenv').config({ path: dotenvPath });
console.log(process.env.CLOUD_NAME);

cloudinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key:process.env.API_KEY,
  api_secret:process.env.API_SECRET,
});
module.exports = cloudinary;
