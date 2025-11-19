// import prisma
const {PrismaClient} = require('@prisma/client');

// insialisasi instance prisma yang terhubung ke DB sesuai DB _USERS
const prisma = new PrismaClient();

module.exports= prisma;