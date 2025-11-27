const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const hitungIndeks = (skor) => {
  if (skor >= 80) return 'A';
  if (skor >= 70) return 'B';
  if (skor >= 60) return 'C';
  if (skor >= 50) return 'D';
  return 'E';
};

exports.getAllNilai = async (req, res) => {
  const data = await prisma.nilai.findMany({
    include: { mahasiswa: true, mataKuliah: true },
  });
  res.json(data);
};



exports.getNilaiById = async (req, res) => {
  const id = parseInt(req.params.id);
  const data = await prisma.nilai.findUnique({
    where: { id },
    include: { mahasiswa: true, mataKuliah: true },
  });
  res.json(data);
};

exports.createNilai = async (req, res) => {
  const { mahasiswa_id, mata_kuliah_id, skor } = req.body;
  if (skor < 0 || skor > 100) {
    return res.status(400).json({ message: 'Data nilai salah (harus 0 - 100)' });
  }

  const indeks = hitungIndeks(skor);

  const data = await prisma.nilai.create({
    data: {
      mahasiswa_id,
      mata_kuliah_id,
      skor,
      indeks,
    },
  });
  res.json(data);
};

exports.updateNilai = async (req, res) => {
  const id = parseInt(req.params.id);
  const { mahasiswa_id, mata_kuliah_id, skor } = req.body;

  if (skor < 0 || skor > 100) {
    return res.status(400).json({ message: 'Data nilai salah (harus 0 - 100)' });
  }

  const indeks = hitungIndeks(skor);

  const data = await prisma.nilai.update({
    where: { id },
    data: { mahasiswa_id, mata_kuliah_id, skor, indeks },
  });
  res.json(data);
};

exports.deleteNilai = async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.nilai.delete({ where: { id } });
  res.json({ message: 'Nilai deleted' });
};
