const express = require("express");
const router = express.Router();
const passport = require("passport");
const {
  postComment,
  getAllComments,
  deleteComment,
} = require("../controllers/commentController");

router.post(
  "/comment/new",
  passport.authenticate("jwt", { session: false }),
  postComment
);

router.get(
  "/comments/:blogId",
  passport.authenticate("jwt", { session: false }),
  getAllComments
);

router.delete(
  "/comment/delete/:commentId",
  passport.authenticate("jwt", { session: false }),
  deleteComment
);

module.exports = router;
