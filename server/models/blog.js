const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const img = "";

const blogSchema = new Schema({
  category: {
    type: String,
    default: "all",
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  content: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    default: img,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Blog", blogSchema);
