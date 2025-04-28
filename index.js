var express = require("express");
var cors = require("cors");
const multer = require("multer");

require("dotenv").config();

var app = express();

// we configure multer with memory storage to store file in memory temporarily
const storage = multer.memoryStorage(); // Stores the file in memory
const upload = multer({ storage: storage });

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// POST route to handle file upload

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  // Check if file is provided
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  // Extract the file's metadata

  const file = req.file;
  const name = file.originalname; // we get the original name of the file
  const type = file.mimetype; // we get the MIME type (file type)
  const size = file.size; // we get the size in bytes

  // Respond with the file metadata

  return res.status(200).json({
    name,
    type,
    size,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
