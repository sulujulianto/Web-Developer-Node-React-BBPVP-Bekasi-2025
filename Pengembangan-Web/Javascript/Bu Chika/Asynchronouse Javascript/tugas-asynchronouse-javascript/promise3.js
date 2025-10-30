function filterCarsPromise(color, year) {
    return new Promise(function (resolve, reject) {
        var cars = [
            { brand: 'toyota', name: 'avanza', year: 2019, color: 'black' },
            { brand: 'daihatsu', name: 'xenia', year: 2017, color: 'silver' },
            { brand: 'suzuki', name: 'ertiga', year: 2017, color: 'silver' },
            { brand: 'lamborghini', name: 'gallardo', year: 2018, color: 'grey' },
            { brand: 'honda', name: 'jazz', year: 2018, color: 'grey' },
            { brand: 'toyota', name: 'agya', year: 2020, color: 'black' }
        ];

        const filtered = cars.filter(x => x.color === color && x.year === year);

        if (filtered.length > 0) {
            resolve(filtered);
        } else {
            reject("Maaf Data tidak ditemukan");
        }
    });
}

module.exports = filterCarsPromise;