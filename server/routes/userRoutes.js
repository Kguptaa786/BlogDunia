const express = require("express");
const router = express.Router();
const passport = require("passport");
const { login, register } = require("../controllers/userController");

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

router.get(
  "/auth/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    successRedirect: "/",
  })
);

router.post("/login", login);
router.post("/register", register);

module.exports = router;
