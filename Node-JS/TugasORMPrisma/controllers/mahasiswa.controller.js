const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllMahasiswa = async (req, res) => {
  const data = await prisma.mahasiswa.findMany();
  res.json(data);
};

exports.getMahasiswaById = async (req, res) => {
  const id = parseInt(req.params.id);
  const data = await prisma.mahasiswa.findUnique({ where: { id } });
  res.json(data);
};

exports.createMahasiswa = async (req, res) => {
  const { nama } = req.body;
  const data = await prisma.mahasiswa.create({ data: { nama } });
  res.json(data);
};

exports.updateMahasiswa = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nama } = req.body;
  const data = await prisma.mahasiswa.update({ where: { id }, data: { nama } });
  res.json(data);
};

exports.deleteMahasiswa = async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.mahasiswa.delete({ where: { id } });
  res.json({ message: 'Mahasiswa deleted' });
};
