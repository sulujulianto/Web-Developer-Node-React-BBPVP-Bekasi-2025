const express = require('express');
const router = express.Router();
const controller = require('../controllers/nilai.controller');

router.get('/', controller.getAllNilai);
router.get('/:id', controller.getNilaiById);
router.post('/', controller.createNilai);
router.put('/:id', controller.updateNilai);
router.delete('/:id', controller.deleteNilai);

module.exports = router;
