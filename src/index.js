let express = require("express");
let path = require("path");
let loginRoute=require('./route/loginRoute')
let app = express();
let PORT = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
//this is for the connection of db
require("../db/conn");
//this is for route
app.use(loginRoute)
//this is for port
app.listen(PORT, () => {
  console.log(`your server is sart at http://localhost:${PORT}`);
});
