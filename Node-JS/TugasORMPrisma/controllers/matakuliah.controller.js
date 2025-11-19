const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllMataKuliah = async (req, res) => {
  const data = await prisma.mataKuliah.findMany();
  res.json(data);
};

exports.getMataKuliahById = async (req, res) => {
  const id = parseInt(req.params.id);
  const data = await prisma.mataKuliah.findUnique({ where: { id } });
  res.json(data);
};

exports.createMataKuliah = async (req, res) => {
  const { nama } = req.body;
  const data = await prisma.mataKuliah.create({ data: { nama } });
  res.json(data);
};

exports.updateMataKuliah = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nama } = req.body;
  const data = await prisma.mataKuliah.update({ where: { id }, data: { nama } });
  res.json(data);
};

exports.deleteMataKuliah = async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.mataKuliah.delete({ where: { id } });
  res.json({ message: 'Mata kuliah deleted' });
};
