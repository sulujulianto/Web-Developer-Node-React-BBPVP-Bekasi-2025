const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movieController');
const { validationBodyMovies } = require('../middleware/validation');

router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getMoviesById);
router.post('/', validationBodyMovies, movieController.createMovie);
router.put('/:id', validationBodyMovies, movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);

module.exports = router;