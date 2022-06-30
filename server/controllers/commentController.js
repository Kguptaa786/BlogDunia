const Comment = require("../models/comment");
module.exports = {
  postComment: async (req, res) => {
    try {
      const { blogId, text } = req.params;
      const userId = req.user.userId;
      const newComment = await new Comment({
        blog: blogId,
        user: userId,
        text,
      });
      await newComment.save();
      return res.json({
        success: true,
        message: "Commented successfully",
      });
    } catch (error) {
      console.log(error);
    }
  },
  getAllComments: async (req, res) => {
    try {
      const { blogId } = req.params;
      const comments = await Comment.find({ blog: blogId });
      if (!comment) {
        return res.json({
          success: false,
          message: "No comment",
        });
      }
      return res.json({
        success: true,
        comments: comments,
        message: "All comments are..",
      });
    } catch (error) {
      console.log(error);
    }
  },
  deleteComment: async (req, res) => {
    try {
      const { commentId } = req.params;
      await Comment.findByIdAndDelete({ _id: commentId });
      return res.json({
        success: true,
        message: "Comment deleted",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
