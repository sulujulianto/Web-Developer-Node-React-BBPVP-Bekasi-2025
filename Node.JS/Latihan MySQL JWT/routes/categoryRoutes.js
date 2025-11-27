const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController'); // ← tambah ../
const auth = require('../middlewares/auth'); // ← tambah ../
const { validateCategoryCreate, validateCategoryUpdate } = require('../middlewares/validation'); // ← tambah ../

router.get('/', categoryController.getAll); // public
router.get('/:id', categoryController.getById); // public
router.post('/', auth, validateCategoryCreate, categoryController.create); // protected
router.put('/:id', auth, validateCategoryUpdate, categoryController.update); // protected
router.delete('/:id', auth, categoryController.remove); // protected

module.exports = router;