const fs = require("fs");

// Data film awal
let daftarFilm = [
    {
        judul: "Pengabdi Setan",
        tahun: 2017,
        genre: "Horor"
    },
    {
        judul: "Pengabdi Setan 2: Communion",
        tahun: 2022,
        genre: "Horor"
    }
];

// Simpan ke file JSON
fs.writeFileSync("film.json", JSON.stringify(daftarFilm, null, 2));

// Tampilkan daftar film
console.log("Daftar Film:");
for (let i = 0; i < daftarFilm.length; i++) {
    console.log((i + 1) + ". " + daftarFilm[i].judul + " (" + daftarFilm[i].tahun + ") - " + daftarFilm[i].genre);
}
