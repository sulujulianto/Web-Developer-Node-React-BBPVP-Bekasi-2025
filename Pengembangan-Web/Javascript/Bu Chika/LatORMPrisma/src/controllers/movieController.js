const prisma = require('../config/utils');

//READ
const getAllMovies = async (req,res) => {
    try{
        const movies = await prisma.movie.findMany({
            include : {category : true} 
        });
        return res.json(movies);
    }catch(error){
        console.error(error);
        return res.status(500).json({message : 'Internal server error'});
    }
}

//Read by id
const getMovieById = async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const movie = await prisma.movie.findUnique({
            where : {id},
            include : {category:true}
        });

        if(!movie) return res.status(404).json({message : 'Movie not found'});
        return res.json(movie);
    }catch(error){
         console.error(error);
        return res.status(500).json({message : 'Internal server error'});
    }
}

//create 
const createMovie = async (req, res) => {
    try{
        const {title, year, categoryId} = req.body;
        const data = {title, year: parseInt(year)}

        if(categoryId !== undefined && categoryId !== null) {
            data.categoryId = parseInt(categoryId);
        }

        const movieBaru = await prisma.movie.create({
            data,
            include : {category : true}
        });

        return res.status(201).json(movieBaru);
    }catch(error){
        console.error(error);
        return res.status(400).json({message : error.message});
    }
}

//update
const updateMovie = async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const {title, year, categoryId} = req.body;

        const data = {title, year:parseInt(year)};
        if('categoryId' in req.body){
            data.categoryId = categoryId===null ? null : parseInt(categoryId);
        }

        const movieUpdate = await prisma.movie.update({
            where : {id},
            data,
            include: {category:true}
        })

        return res.json(movieUpdate);
    }catch(error){
        console.error(error);
        if(error.code = 'P2025') { //kode error prisma klo record not found
            return res.status(404).json({message : 'Movie not found'});
        }
        return res.status(400).json({message: error.message});
    }
}

//delete
const deleteMovie = async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        await prisma.movie.delete ( {where: {id}});
        return res.json({message : "Movie Deleted"});
    }catch(error){
        console.error(error);
        if(error.code = 'P2025') { //kode error prisma klo record not found
            return res.status(404).json({message : 'Movie not found'});
        }
        return res.status(500).json({message: 'Internal server error'});
    }
}

module.exports = {
    getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie
}