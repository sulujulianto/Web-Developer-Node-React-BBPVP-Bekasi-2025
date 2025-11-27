//kode untuk tugas rest api orm prisma yang lama

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Import routes
const mahasiswaRoute = require('./routes/mahasiswa.route');
const matakuliahRoute = require('./routes/matakuliah.route');
const nilaiRoute = require('./routes/nilai.route');

// Register routes
app.use('/mahasiswa', mahasiswaRoute);
app.use('/matakuliah', matakuliahRoute);
app.use('/nilai', nilaiRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

//end of code - //kode untuk tugas rest api orm prisma yang lama

