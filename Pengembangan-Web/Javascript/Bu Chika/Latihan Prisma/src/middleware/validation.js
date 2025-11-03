const validationBodyMovies = (req, res, next) => {
    let {title, year} = req.body;

    if(title === undefined || year === undefined){
        res.status(400).json({message:"title and year is require"});
    } else {
        next();
    }
}

const validationBodyCategories  = (req, res, next) => {
    let {name} = req.body;

    if(name === undefined) {
        res.status(400).json({message: "name is require"});
    } else {
        next();
    }
}

module.exports = {
    validationBodyMovies, validationBodyCategories
}