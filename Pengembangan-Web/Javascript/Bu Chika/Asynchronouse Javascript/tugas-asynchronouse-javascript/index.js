var readBooks = require('./callback.js');

var books = [
    { name: 'LoTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'komik', timeSpent: 1000 }
];

// Mulai dengan waktu 10000ms
readBooks(10000, books[0], function (sisa) {
    if (sisa <= 0) return;
    readBooks(sisa, books[1], function (sisa) {
        if (sisa <= 0) return;
        readBooks(sisa, books[2], function (sisa) {
            if (sisa <= 0) return;
            readBooks(sisa, books[3], function (sisa) {
                if (sisa <= 0) return;
                console.log("Semua buku sudah dibaca!");
            });
        });
    });
});