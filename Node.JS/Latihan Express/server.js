const express = require("express")
const app = express();
const port = 3000;

const movieRoutes = require('./Routes/movie');


//midedleware global untuk parsing json
app.use(express.json());

app.use('/api/movies', movieRoutes);
//route sederhana
app.get('/', (reg, res) => {
    res.send('Hello world dari express edo kelas NB 4');
});

// menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`)
});