const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController'); // ← tambah ../
const auth = require('../middlewares/auth'); // ← tambah ../
const { validateMovieCreate, validateMovieUpdate } = require('../middlewares/validation'); // ← tambah ../

router.get('/', movieController.getAll); // public
router.get('/:id', movieController.getById); // public
router.post('/', auth, validateMovieCreate, movieController.create); // protected
router.put('/:id', auth, validateMovieUpdate, movieController.update); // protected
router.delete('/:id', auth, movieController.remove); // protected

module.exports = router;