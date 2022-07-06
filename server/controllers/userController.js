const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const secretOrKey = process.env.SECRET_OR_KEY;

module.exports = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res
          .status(400)
          .json({ success: false, message: "All fields are required" });
      }
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ success: false, message: "No user found" });
      }
      const isCorrect = await bcrypt.compareSync(password, user.password);
      if (!isCorrect) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid credential" });
      }
      const token =
        "Bearer " +
        jwt.sign(
          { userId: user._id, name: user.name, email: user.email },
          secretOrKey,
          {
            expiresIn: "1d",
          }
        );
      return res.status(200).json({
        success: true,
        token: token,
        message: "Successfully Logged in",
      });
    } catch (err) {
      console.log(err);
    }
  },
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      if (!email || !password || !name) {
        return res
          .status(400)
          .json({ success: false, message: "All fields are required" });
      }
      const isEmail = await User.findOne({ email });
      if (isEmail) {
        return res
          .status(400)
          .json({ success: false, message: "Email already exist" });
      }
      const hashPassowrd = bcrypt.hashSync(password, 4);
      const newUser = new User({ name, email, password: hashPassowrd });
      await newUser.save();
      return res
        .status(200)
        .json({ success: true, message: "Successfully registerd" });
    } catch (err) {
      console.log(err);
    }
  },

  registerGoogle: async (req, res) => {},
};
