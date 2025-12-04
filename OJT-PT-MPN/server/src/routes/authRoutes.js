const express = require('express');
const { loginAdmin } = require('../controllers/authController');
const { loginLimiter } = require('../middleware/rateLimiters');

const router = express.Router();

router.post('/login', loginLimiter, loginAdmin);

module.exports = router;
