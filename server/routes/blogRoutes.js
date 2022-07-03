const express = require("express");
const router = express.Router();
const passport = require("passport");
const {
  createBlog,
  deleteBlog,
  detailBlog,
  updateBlog,
  uploadImage,
  getBlogByCategory,
  getImage,
} = require("../controllers/blogController");
const upload = require("../utils/upload");

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  createBlog
);
router.put(
  "/update/:blogId",
  passport.authenticate("jwt", { session: false }),
  updateBlog
);
router.delete(
  "/delete/:blogId",
  passport.authenticate("jwt", { session: false }),
  deleteBlog
);

router.get(
  "/detail/:blogId",
  passport.authenticate("jwt", { session: false }),
  detailBlog
);
router.get(
  "/getBlogs/:category",
  passport.authenticate("jwt", { session: false }),
  getBlogByCategory
);

router.post("/file/upload", upload.single("file"), uploadImage);

router.get("/file/:filename", getImage);

module.exports = router;
