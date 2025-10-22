// Array buah
let buah = [];

// Tambahkan buah secara berurutan
buah.push("Apel");
buah.push("Mangga");
buah.push("Jeruk");
buah.push("Semangka");
buah.push("Pisang");
buah.push("Anggur");
buah.push("Nanas");

// Urutkan alfabet
buah.sort();

// Tampilkan hasil
for (let i = 0; i < buah.length; i++) {
    console.log((i + 1) + ". " + buah[i]);
}
