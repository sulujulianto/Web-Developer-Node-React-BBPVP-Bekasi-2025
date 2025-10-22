const { Console } = require('console');
const fs = require('fs');

// 1. Baca isi file
const isiFile = fs.readFileSync('data.json', 'utf-8')

// 2. Ubah string JSON jadi array
const data = JSON.parse(isiFile);

// 3. Tampilkan ke konsol
console.log("isi data.json : ", data);


// 4. Tampilkan tiap baris, satu per satu
data.forEach((item) => {
    console.log(`ID : ${item.id},
        Nama : ${item.nama},
        Umur : ${item.umur}`);
});