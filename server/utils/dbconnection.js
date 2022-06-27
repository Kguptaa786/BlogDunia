const mongoose = require("mongoose");
const DB_URL = "mongodb://localhost:27017/blogApplication";
try {
  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Db Connection is successful");
} catch (err) {
  console.log(err);
}
