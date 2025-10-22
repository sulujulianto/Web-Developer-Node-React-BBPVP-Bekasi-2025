const fs = require('fs');

// Baca file film.json
const bacaData = () => {
    try {
        const data = fs.readFileSync('film.json', 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

// Buat object film baru
const filmBaru = {
    judul: "Pengabdi Setan 2",
    tahun: 2022,
    genre: "Horor"
};

// Baca daftar film yang sudah ada
let daftarFilm = bacaData();

// Tambahkan film baru ke array
daftarFilm.push(filmBaru);

// Simpan kembali ke file JSON
fs.writeFileSync('film.json', JSON.stringify(daftarFilm, null, 2));

// Tampilkan semua film
console.log("Daftar Film:");
daftarFilm.forEach((film, index) => {
    console.log(`${index + 1}. ${film.judul} (${film.tahun}) - ${film.genre}`);
});
