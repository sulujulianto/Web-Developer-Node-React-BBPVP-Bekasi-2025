const express = require('express');
const app = express();
const port = 3000;


app.use('/tabung', require('./Routes/lingkaran-tabung'));
app.use('/orang', require('./Routes/data-orang'));
app.use('/orang', require('./Routes/data-orang-id'));

app.get('/', (req, res) => {
  res.send(`
    <h1>Praktik Express.js</h1>
    <ul>
      <li><a href="/tabung?tinggi=10">Soal 1 - Hitung Tabung (tinggi=10)</a></li>
      <li><a href="/orang">Soal 2 - Data Orang (L, umur > 30)</a></li>
      <li><a href="/orang/1">Soal 3 - Detail Orang ID 1</a></li>
      <li><a href="/orang/99">Soal 3 - Test Data Tidak Ditemukan</a></li>
    </ul>
  `);
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});