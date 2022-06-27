const Blog = require("../models/blog");
module.exports = {
  create: async (req, res) => {
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
    } catch (err) {
      console.log(err);
    }
  },
  update: async (req, res) => {
    const { blogId } = req.params;
    const { category, title, userId, images, content } = req.body;
    await Blog.findOneAndUpdate(
      { _id: blogId, author: userId },
      { category, title, images, content }
    );
  },
};
