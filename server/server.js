require("dotenv").config();

const express = require("express");
const passport = require("passport");
const cors = require("cors");
const app = express();
const PORT = 8000;

const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const commentRoutes = require("./routes/commentRoutes");

//db connection
require("./utils/dbconnection");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/aaa", (req, res) => {
  console.log(req.user);
});

app.use(passport.initialize());
require("./utils/passport-jwt");

app.use(userRoutes);
app.use(blogRoutes);
app.use(commentRoutes);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
