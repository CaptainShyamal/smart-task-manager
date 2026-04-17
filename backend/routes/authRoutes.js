const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);

const passport = require('passport');
const jwt = require('jsonwebtoken');

// Initial Google OAuth login request
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google OAuth callback
router.get(
  '/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/login' }),
  (req, res) => {
    // Generate JWT token for the authenticated user
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
    
    // Redirect to frontend with token (or send JSON depending on architecture)
    // For now, returning JSON with token. In production, you'd redirect to frontend dashboard like:
    // res.redirect(`http://localhost:3000/dashboard?token=${token}`);
    res.json({
      message: 'Google Authentication Successful',
      token: token,
      user: req.user
    });
  }
);

module.exports = router;
