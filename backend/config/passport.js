const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || 'placeholder_client_id',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'placeholder_client_secret',
      callbackURL: '/api/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if user already exists in our db
        let user = await User.findOne({ email: profile.emails[0].value });

        if (user) {
          return done(null, user);
        } else {
          // If not, create a new user
          // Generating a random password for OAuth users since they don't provide one
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(profile.id + process.env.JWT_SECRET, salt);
          
          user = await User.create({
            name: profile.displayName,
            email: profile.emails[0].value,
            password: hashedPassword,
          });

          return done(null, user);
        }
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

module.exports = passport;
