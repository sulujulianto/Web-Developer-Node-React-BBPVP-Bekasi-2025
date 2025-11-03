const express = require('express');
const router = express.Router();
const nilaiController = require('../controllers/nilaiController');

router.get('/', nilaiController.getAllNilai);
router.post('/', nilaiController.createNilai);

module.exports = router;