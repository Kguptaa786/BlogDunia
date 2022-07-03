require("dotenv").config();
const { GridFsStorage } = require("multer-gridfs-storage");
const multer = require("multer");

const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.o9q3j.mongodb.net/?retryWrites=true&w=majority`;
const storage = new GridFsStorage({
  url: DB_URL,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  file: (req, file) => {
    const match = ["image/jpeg", "image/jpg", "image/png"];
    if (match.indexOf(file.memeType) === -1) {
      return `${Date.now()}-blog-${file.originalname}`;
    }
    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});
const upload = multer({ storage });
module.exports = upload;
