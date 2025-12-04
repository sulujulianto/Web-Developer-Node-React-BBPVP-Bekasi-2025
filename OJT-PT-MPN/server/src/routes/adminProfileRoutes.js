const express = require('express');
const { getCompanyProfileAdmin, updateCompanyProfile } = require('../controllers/companyProfileController');
const { requireAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', requireAdmin, getCompanyProfileAdmin);
router.put('/', requireAdmin, updateCompanyProfile);

module.exports = router;
