const {PrismaClient} = require('@prisma/client');
//import prisma

const prisma = new PrismaClient();
//insialisasi instance prisma yg terhubung ke DB sesuai DB_URL

module.exports= prisma;

