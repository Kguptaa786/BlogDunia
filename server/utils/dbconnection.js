const mongoose = require("mongoose");
const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.o9q3j.mongodb.net/?retryWrites=true&w=majority`;
// "mongodb://localhost:27017/blogApplication";
try {
  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Db Connection is successful");
} catch (err) {
  console.log(err);
}
