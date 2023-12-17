let express = require("express");
let path = require("path");
let loginRoute = require("./route/loginRoute");
let cookieParser=require('cookie-parser')
let app = express();
const dotenvPath = path.resolve(__dirname, '../.env');
require('dotenv').config({ path: dotenvPath });
//this is the middlware for serving static file
app.use(express.static(path.join(__dirname, "public")));
//this is the middlware for setting the req body and res body
app.use(express.json());
//this is the middlware for manupulating cookie in easy way
app.use(cookieParser())
//this is for the connection of db
require("../db/conn");
//this is for route
app.use(loginRoute);
//this is for port
app.listen(process.env.PORT, () => {
  console.log(`your server is sart at http://localhost:${process.env.PORT}`);
});
