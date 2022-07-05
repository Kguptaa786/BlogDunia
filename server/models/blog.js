const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  category: {
    type: String,
    default: "All",
  },
  title: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Blog", blogSchema);
