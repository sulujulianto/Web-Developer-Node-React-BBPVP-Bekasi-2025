// Data tinggi badan
let tinggi = {
  Rose: 178,
  Magnolia: 153,
  Daisy: 165,
  Jasmine: 161,
  Violet: 159,
};

// Buat array tinggi dengan nama dan tinggi
let arrayTinggi = [];
for (let nama in tinggi) {
  arrayTinggi.push({ nama: nama, tinggi: tinggi[nama] });
}

// Urutkan berdasarkan nama (A ke Z)
arrayTinggi.sort;
