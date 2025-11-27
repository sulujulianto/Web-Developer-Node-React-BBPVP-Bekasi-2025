const express = require('express');
const router = express.Router();

let dataOrang = [
  { id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L" },
  { id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L" },
  { id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P" },
  { id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L" },
  { id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P" }
];

router.get('/', (req, res) => {
  const filtered = dataOrang.filter(
    (orang) => orang.jenisKelamin === 'L' && orang.umur > 30
  );

  if (filtered.length === 0) {
    return res.send('Tidak ada data yang sesuai');
  }

  let output = '';
  filtered.forEach((orang, index) => {
    output += `${index + 1}. ${orang.name} - Pekerjaan: ${orang.pekerjaan} - Umur: ${orang.umur} Tahun\n`;
  });

  res.send(output);
});

module.exports = router;