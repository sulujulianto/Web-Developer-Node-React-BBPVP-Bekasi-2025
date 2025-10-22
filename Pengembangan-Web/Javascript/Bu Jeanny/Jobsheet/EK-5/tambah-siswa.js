const fs = require("fs");

const filePath = "siswa.json";
let daftar = [];

// Cek apakah file sudah ada
if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, "utf8");
    daftar = JSON.parse(content);
}

// Data siswa baru
let siswaBaru1 = {
    nama: "Sunflower",
    kelas: "Web",
    nilai: [93, 97, 83],
};

let siswaBaru2 = {
    nama: "Magnolia",
    kelas: "Web",
    nilai: [98, 77, 68],
};

// Tambahkan ke array
daftar.push(siswaBaru1);
daftar.push(siswaBaru2);

// Simpan kembali ke file
fs.writeFileSync(filePath, JSON.stringify(daftar, null, 2));
console.log("Data siswa berhasil ditambahkan ke siswa.json");
