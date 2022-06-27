const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user");

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_CALLBACK_URL = process.env.GOOGLE_CALLBACK_URL;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        if (err) {
          return cb(err, false);
        }
        if (user) {
          return cb(null, user);
        } else {
          let newUser = new User({
            googleId: profile.id,
            name: profile.displayName,
          });
          newUser.save();
          return cb(null, newUser);
        }
      });
    }
  )
);
