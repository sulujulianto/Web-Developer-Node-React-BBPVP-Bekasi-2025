var filterBooksPromise = require('./promise2.js');

// 1. Buku berwarna & 50 halaman
filterBooksPromise(true, 50)
    .then((books) => console.log(books))
    .catch((err) => console.log(err.message));

// 2. Buku tidak berwarna & 250 halaman (async/await)
(async () => {
    try {
        const books = await filterBooksPromise(false, 250);
        console.log(books);
    } catch (err) {
        console.log(err.message);
    }
})();

// 3. Buku berwarna & 30 halaman (async/await)
(async () => {
    try {
        const books = await filterBooksPromise(true, 30);
        console.log(books);
    } catch (err) {
        console.log(err.message);
    }
})();