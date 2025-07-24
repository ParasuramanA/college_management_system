const { users } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

exports.register = async (req, res) => {
  const { firstname,lastname, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  try {
    const user = await users.create({ firstname,lastname, email, password: hashedPassword, role });
    res.status(201).json({ token: generateToken(user) });
  } catch (err) {
    res.status(400).json({ message: 'Registration failed', error: err.message });
  }
  
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await users.findOne({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({ token: generateToken(user) });
};
