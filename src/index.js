let express = require("express");
let path = require("path");
let loginRoute = require("./route/loginRoute");
let app = express();
const dotenvPath = path.resolve(__dirname, '../.env');
require('dotenv').config({ path: dotenvPath });
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
//this is for the connection of db
require("../db/conn");
//this is for route
app.use(loginRoute);
//this is for port
app.listen(process.env.PORT, () => {
  console.log(`your server is sart at http://localhost:${process.env.PORT}`);
});
