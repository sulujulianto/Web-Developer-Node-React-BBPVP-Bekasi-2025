function readBooks(time, book, callback) {
    console.log("saya membaca " + book.name);
    setTimeout(function () {
        let sisaWaktu = 0;
        if (time >= book.timeSpent) {
            sisaWaktu = time - book.timeSpent;
            console.log("saya sudah membaca " + book.name + ", sisa waktu saya " + sisaWaktu);
            callback(sisaWaktu); // lanjut ke buku berikutnya
        } else {
            console.log('waktu saya habis');
            callback(time); // waktu habis
        }
    }, book.timeSpent);
}

module.exports = readBooks;