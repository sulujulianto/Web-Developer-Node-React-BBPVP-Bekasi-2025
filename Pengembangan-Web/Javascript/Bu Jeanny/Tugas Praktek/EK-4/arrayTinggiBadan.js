// Data tinggi badan
let tinggi = {
    Rose: 178,
    Magnolia: 153,
    Daisy: 165,
    Jasmine: 161,
    Violet: 159
};

// Buat array tinggi dengan nama dan tinggi
let arrayTinggi = [];
for (let nama in tinggi) {
    arrayTinggi.push({ nama: nama, tinggi: tinggi[nama] });
}

// Urutkan berdasarkan nama (A ke Z)
arrayTinggi.sort(function(a, b) {
    if (a.nama < b.nama) return -1;
    if (a.nama > b.nama) return 1;
    return 0;
});

// Tampilkan hasil
console.log("Urutan berdasarkan nama (A ke Z):");
for (let i = 0; i < arrayTinggi.length; i++) {
    console.log((i + 1) + ". " + arrayTinggi[i].nama + " memiliki tinggi " + arrayTinggi[i].tinggi + " cm");
}
