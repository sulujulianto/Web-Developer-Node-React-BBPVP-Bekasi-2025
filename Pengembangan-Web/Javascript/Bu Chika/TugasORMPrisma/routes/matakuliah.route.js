const express = require('express');
const router = express.Router();
const controller = require('../controllers/matakuliah.controller');

router.get('/', controller.getAllMataKuliah);
router.get('/:id', controller.getMataKuliahById);
router.post('/', controller.createMataKuliah);
router.put('/:id', controller.updateMataKuliah);
router.delete('/:id', controller.deleteMataKuliah);

module.exports = router;
