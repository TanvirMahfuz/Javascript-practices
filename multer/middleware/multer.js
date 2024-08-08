const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("middleware : " + file.fieldname);
    cb(null, "./public/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

module.exports = multer({ storage });
