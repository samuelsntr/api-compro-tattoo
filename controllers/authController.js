const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');
const User = db.User;

const JWT_SECRET = process.env.JWT_SECRET || 'tattoo_secret';

exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const exists = await User.findOne({ where: { username } });
    if (exists) return res.status(400).json({ message: 'Username already taken' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, password: hashedPassword });

    res.status(201).json({ message: 'User created', user: { id: newUser.id, username: newUser.username } });
  } catch (err) {
    res.status(500).json({ message: 'Error registering', error: err.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid password' });

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user: { id: user.id, username: user.username } });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in', error: err.message });
  }
};
