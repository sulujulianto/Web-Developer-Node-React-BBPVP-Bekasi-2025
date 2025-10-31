const express = require('express');
const router = express.Router();

// data dummy
let movies = [
    {id : 1, title: 'Inception', year: 2010},
    {id : 2, title: 'Interstellar', year: 2014}
];

// nampilkan semua data , GET, /api/movies
router.get('/', (req, res) => {
    res.json(movies);
});

// nampilin 1 data , GET , /api/movies
router.get('/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if(!movie) return res.status(404).json({message : 'Movie not found'});
    res.json(movie);
});

// nambah data, POST, /api/movie
router.post('/', (req, res) => {
    const newMovie = {
        id : movies.length + 1,
        tittle : req.body.tittle,
        year : req.body.year
    };
    movie.push(newMovie);
    res.status(201).json(newMovie);
})

// edit data update data, PUT, /api/movie
router.put('/:id', (req, res) => {
    const movieEdit = movies.find(m => m.id === parseInt(req.params.id));
    if(!movieEdit) return res.status(404).json({message : 'Movie not found'});

    movieEdit.title = req.body.title || movieEdit.title;
    movieEdit.year = req.body.year || movieEdit.year;

    res.json(movieEdit);
});

// delete, /api/movies/:id
router.delete('/:id', (req, res) => {
    movies = movies.filter(m => m.id !== parseInt(req.params.id));
    res.status(204).end();
});

module.exports = router