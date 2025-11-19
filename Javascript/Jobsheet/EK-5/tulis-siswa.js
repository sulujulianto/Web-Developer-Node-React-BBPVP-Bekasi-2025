const fs = require("fs");

let siswa = [
    {
        nama: "Lily",
        kelas: "Web",
        nilai: [78, 92, 87],
    },
];

// Menyimpan data ke file siswa.json
fs.writeFileSync("siswa.json", JSON.stringify(siswa, null, 2));
console.log("Data siswa berhasil ditulis ke file siswa.json");
