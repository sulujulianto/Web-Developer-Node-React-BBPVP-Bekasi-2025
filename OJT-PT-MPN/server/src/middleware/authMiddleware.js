const jwt = require('jsonwebtoken');

const requireAdmin = (req, res, next) => {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.substring(7) : null;

  if (!token) {
    return res.status(401).json({ success: false, message: 'Unauthorized: token missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Unauthorized: invalid token' });
  }
};

module.exports = { requireAdmin };
