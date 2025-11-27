var filterCarsPromise = require('./promise3.js');

// 1. Mobil hitam tahun 2019
filterCarsPromise('black', 2019)
    .then((cars) => console.log(cars))
    .catch((err) => console.log(err));

// 2. Mobil silver tahun 2017
filterCarsPromise('silver', 2017)
    .then((cars) => console.log(cars))
    .catch((err) => console.log(err));

// 3. Mobil abu-abu tahun 2019 (async/await)
(async () => {
    try {
        const cars = await filterCarsPromise('grey', 2019);
        console.log(cars);
    } catch (err) {
        console.log(err);
    }
})();

// 4. Mobil abu-abu tahun 2018 (async/await)
(async () => {
    try {
        const cars = await filterCarsPromise('grey', 2018);
        console.log(cars);
    } catch (err) {
        console.log(err);
    }
})();

// 5. Mobil hitam tahun 2020 (async/await)
(async () => {
    try {
        const cars = await filterCarsPromise('black', 2020);
        console.log(cars);
    } catch (err) {
        console.log(err);
    }
})();