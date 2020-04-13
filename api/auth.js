const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth')

// User Model
const User = require('../models/User')


// @route   POST api/auth/sign-up
router.post('/sign-up', (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password)
  // Validation
  if(!name || !email || !password) {
    return res.status(400).json({msg: "Please fill out all of the fields"});
  }

  // Check for existing user
  User.findOne({ email })
  .then(user => {
    if(user) return res.status(400).json({msg: "User already exists"});

    const newUser = new User ({
      name,
      email,
      password,
    });

    // Create salt and hash 
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if(err) throw err;
        newUser.password = hash;
        newUser.save()
          .then(user => {
            // Generate token for Verification Purposes
            jwt.sign(
              { id: user.id },
              config.get('jwtSecret'),
              { expiresIn: 3600 },
              (err, token) => {
                if(err) throw err;
                res.json({
                  token: token,
                  user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                  }
                })
              }
            )
          })
      })
    })
  })
});

// @route   POST api/auth/login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Check for existing user
  User.findOne({ email })
  .then(user => {
    if(!user) return res.status(400).json({msg: "User does not exist"});

    // Validate password
    bcrypt.compare(password, user.password)
    .then(isMatch => {
      if(!isMatch) return res.status(400).json({msg: "Invalid username or password"});

      jwt.sign(
        { id: user.id },
        config.get('jwtSecret'),
        { expiresIn: 3600 },
        (err, token) => {
          if(err) throw err;
          res.json({
            token: token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
            }
          })
        }
      )
    })
  });
}); 

// @route   GET api/auth/user
// @desc    Get User Data
// @access  Private
router.get('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user))
    .catch(err => res.json({msg: "No User found"}));
});


module.exports = router;