const express = require('express');
const router = express.Router();

let dataOrang = [
  { id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L" },
  { id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L" },
  { id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P" },
  { id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L" },
  { id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P" }
];

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const orang = dataOrang.find((o) => o.id === id);

  if (!orang) {
    return res.send('Maaf data tidak ditemukan');
  }

  const prefix = orang.jenisKelamin === 'L' ? 'Pak' : 'Bu';
  res.send(
    `${prefix} ${orang.name} berusia ${orang.umur} tahun, bekerja sebagai ${orang.pekerjaan}`
  );
});

module.exports = router;