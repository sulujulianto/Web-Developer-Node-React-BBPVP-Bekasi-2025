function filterBooksPromise(colorful, amountOfPage) {
    return new Promise(function (resolve, reject) {
        var books = [
            { name: "shinchan", totalPage: 50, isColorful: true },
            { name: "Kalkulus", totalPage: 250, isColorful: false },
            { name: "doraemon", totalPage: 50, isColorful: true },
            { name: "algoritma", totalPage: 250, isColorful: false }
        ];

        if (amountOfPage >= 40) {
            const filtered = books.filter(x =>
                x.totalPage === amountOfPage && x.isColorful === colorful
            );
            resolve(filtered);
        } else {
            reject(new Error("Maaf buku di bawah 40 halaman tidak tersedia"));
        }
    });
}

module.exports = filterBooksPromise;