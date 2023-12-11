let multer = require("multer");
let path = require("path");
const storage = multer.diskStorage({
    // destination: function (req, file, cb) {
    //   cb(null, path.join(__dirname, "../src/uploads")); // Upload images will be stored in the 'uploads/images/' directory
    // },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  const upload = multer({ storage: storage });
  module.exports=upload
