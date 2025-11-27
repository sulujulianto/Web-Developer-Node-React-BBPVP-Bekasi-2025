var readBooksPromise = require('./promise.js');

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
];

readBooksPromise(10000, books[0])
    .then((sisa) => readBooksPromise(sisa, books[1]))
    .then((sisa) => readBooksPromise(sisa, books[2]))
    .then((sisa) => console.log("Selesai membaca semua buku"))
    .catch((sisa) => console.log("Waktu habis, tidak bisa lanjut"));