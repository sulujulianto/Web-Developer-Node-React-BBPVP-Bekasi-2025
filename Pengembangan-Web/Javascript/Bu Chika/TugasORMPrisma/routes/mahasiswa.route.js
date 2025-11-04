const express = require('express');
const router = express.Router();
const controller = require('../controllers/mahasiswa.controller');

router.get('/', controller.getAllMahasiswa);
router.get('/:id', controller.getMahasiswaById);
router.post('/', controller.createMahasiswa);
router.put('/:id', controller.updateMahasiswa);
router.delete('/:id', controller.deleteMahasiswa);

module.exports = router;
