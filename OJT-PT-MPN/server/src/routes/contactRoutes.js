const express = require('express');
const { submitContact, getContacts } = require('../controllers/contactController');
const { contactLimiter } = require('../middleware/rateLimiters');
const { requireAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', contactLimiter, submitContact);
router.get('/admin', requireAdmin, getContacts);

module.exports = router;
