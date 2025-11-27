const express = require('express');
const cors = require('cors');

const app = express();

const movieRoutes = require('./src/routes/movieRoutes');
const categoryRoutes = require('./src/routes/categoryRoutes');

app.use(cors());

app.use(express.json());

app.use('/api/movies', movieRoutes);
app.use('/api/categories', categoryRoutes);

app.get('/', (req, res) => {
    res.send('API berjalan - gunakan /api/movies dan /api/categories');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan pada port ${PORT}`);
});