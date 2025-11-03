const prisma = require('../config/utils');

function hitungIndeks(skor) {
  if (skor >= 80) return 'A';
  if (skor >= 70) return 'B';
  if (skor >= 60) return 'C';
  if (skor >= 50) return 'D';
  return 'E';
}

// CREATE
const createNilai = async (req, res) => {
  try {
    const { mata_kuliah_id, mahasiswa_id, skor } = req.body;
    const indeks = hitungIndeks(skor);

    const nilai = await prisma.nilai.create({
      data: {
        mata_kuliah_id: parseInt(mata_kuliah_id),
        mahasiswa_id: parseInt(mahasiswa_id),
        skor: parseInt(skor),
        indeks,
      },
      include: {
        mata_kuliah: true,
        mahasiswa: true,
      },
    });

    res.status(201).json(nilai);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// READ ALL
const getAllNilai = async (req, res) => {
  try {
    const nilai = await prisma.nilai.findMany({
      include: {
        mata_kuliah: true,
        mahasiswa: true,
      },
    });
    res.json(nilai);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createNilai,
  getAllNilai,
};