const Blog = require("../models/blog");
const mongoose = require("mongoose");
const grid = require("gridfs-stream");
const url = "http://localhost:8000";

//to get image from mongodb (mongodb store image in chunks)
let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once("open", () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "fs",
  });
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("fs");
});

module.exports = {
  createBlog: async (req, res) => {
    try {
      const { category, title, userId, image, content } = req.body;
      if (!title || !content) {
        return res.status(400).json({
          success: false,
          message: "Empty blog not allowed...",
        });
      }
      const newBlog = new Blog({
        category,
        title,
        author: userId,
        image,
        content,
      });
      await newBlog.save();
      return res.status(200).json({
        success: true,
        message: "Created successfully",
      });
    } catch (error) {
      console.log(error);
    }
  },
  updateBlog: async (req, res) => {
    try {
      const { blogId } = req.params;
      const { category, title, image, content } = req.body;
      await Blog.findOneAndUpdate(
        { _id: blogId },
        { category, title, image, content }
      );
      const updatedBlog = Blog.findOne({ _id: blogId });
      return res.json({
        success: true,
        blog: updatedBlog,
        message: "Update successfully",
      });
    } catch (error) {
      console.log(error);
    }
  },
  detailBlog: async (req, res) => {
    try {
      const { blogId } = req.params;
      const blog = await Blog.findById({ _id: blogId });
      return res.json({
        success: true,
        blog: blog,
        message: "Your blog.....",
      });
    } catch (error) {
      console.log(error);
    }
  },
  deleteBlog: async (req, res) => {
    try {
      const { blogId } = req.params;
      await Blog.findByIdAndDelete({ _id: blogId });
      return res.json({
        success: true,
        message: "Deleted successfully",
      });
    } catch (error) {
      console.log(error);
    }
  },
  getBlogByCategory: async (req, res) => {
    try {
      const { category } = req.params;
      let blogs;
      if (category === "All") {
        blogs = await Blog.find({});
      } else {
        blogs = await Blog.find({ category });
      }
      if (!blogs) {
        return res.json({
          success: false,
          message: "No blog found",
        });
      }

      return res.json({
        success: true,
        blogs: blogs,
        message: `${category} blogs....`,
      });
    } catch (error) {
      console.log(error);
    }
  },
  uploadImage: (req, res) => {
    try {
      if (!req.file) {
        return res
          .status(400)
          .json({ success: false, message: "file not found" });
      }
      const imageUrl = `${url}/file/${req.file.filename}`;
      return res.status(200).json({
        success: true,
        image: imageUrl,
        message: "Image upload successfully",
      });
    } catch (error) {
      console.log(error);
    }
  },
  getImage: async (req, res) => {
    try {
      const file = await gfs.files.findOne({ filename: req.params.filename });
      const readStream = gridfsBucket.openDownloadStream(file._id);
      readStream.pipe(res);
    } catch (error) {
      console.log(error);
    }
  },
};
