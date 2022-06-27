require("dotenv").config();

const express = require("express");
const passport = require("passport");
const cors = require("cors");
const app = express();
const PORT = 8000;

const userRoutes = require("./routes/userRoutes");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(passport.initialize());

app.use(userRoutes);

//db connection
require("./utils/dbconnection");

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
