const express = require("express");
const path = require("path");
const app = express();

var upload = require("./middleware/multer");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.post(
  "/data",
  upload.fields([{ name: "image", maxCount: 1 }]),
  (req, res) => {
    console.log("file uploaded");
    console.log(req.body);
    res.status(200).json({ msg: "ok" });
  },
);
app.listen(4000, () => {
  console.log("http://localhost:4000/");
});
