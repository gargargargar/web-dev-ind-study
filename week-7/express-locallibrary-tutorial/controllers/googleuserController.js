var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var Googleuser = require('../models/googleuser');
require('dotenv').config(); //Use dotenv to read .env vars into Node


// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },


  function(accessToken, refreshToken, profile, done) {
       return done(err, user); //to be commented
       /*
       User.findOrCreate({ googleId: profile.id }, function (err, user) {
         return done(err, user);
       });
       */
  }
));



/* All to be implemented */