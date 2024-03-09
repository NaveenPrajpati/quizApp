const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const {username, password} = req.body;
    const existingUser = await User.findOne({username});
    if (existingUser) return res.status(400).send('User already exists.');

    const user = new User({username, password});
    await user.save();
    res.status(201).send('User created successfully.');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const {username, password} = req.body;
    const user = await User.findOne({username});
    if (!user) return res.status(400).send('Invalid credentials.');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid credentials.');

    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
    res.json({token});
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
