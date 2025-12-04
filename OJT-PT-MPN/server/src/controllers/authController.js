const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AdminUser = require('../models/AdminUser');

const loginAdmin = async (req, res) => {
  const { username, password } = req.body || {};

  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username and password are required' });
  }

  try {
    const admin = await AdminUser.findOne({ username });
    if (!admin) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const match = await bcrypt.compare(password, admin.passwordHash);
    if (!match) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: admin._id, username: admin.username, role: admin.role || 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.json({
      success: true,
      token,
      user: { username: admin.username, role: admin.role }
    });
  } catch (err) {
    console.error('loginAdmin error:', err.message);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = { loginAdmin };
