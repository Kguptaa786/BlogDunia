const Blog = require("../models/blog");
module.exports = {
  createBlog: async (req, res) => {
    try {
      const { category, title, userId, images, content } = req.body;
      const newBlog = new Blog({
        category,
        title,
        author: userId,
        images,
        content,
      });
      await newBlog.save();
      return res.json({
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
      const { category, title, images, content } = req.body;
      await Blog.findOneAndUpdate(
        { _id: blogId },
        { category, title, images, content }
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
  getBlogByCateogry: async (req, res) => {
    try {
      const { category } = req.query;
      const blogs = await Blog.find({ category });
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
  getMyBlog: async (req, res) => {
    try {
      const userId = req.user._id;
      const blogs = await Blog.find({ author: userId });
      if (!blogs) {
        return res.json({
          success: false,
          message: "No blog found",
        });
      }
      return res.json({
        success: true,
        blogs: blogs,
        message: `Your blogs....`,
      });
    } catch (error) {
      console.log(error);
    }
  },
  getAllBlog: async (req, res) => {
    try {
      const blogs = await Blog.find({});
      if (!blogs) {
        return res.json({
          success: false,
          message: "No blog found",
        });
      }
      return res.json({
        success: true,
        blogs: blogs,
        message: "All blogs.....",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
