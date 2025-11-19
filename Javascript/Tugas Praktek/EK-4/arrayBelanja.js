// Array berisi objek nama dan harga sepatu
let sepatu = [
    { nama: "New Balance NB530", harga: 390000 },
    { nama: "Nike Vomero 5", harga: 350000 },
    { nama: "Adidas Samba", harga: 180000 },
    { nama: "Onitsuka Tiger Mexico", harga: 420000 }
];

// Tampilkan rincian belanja
console.log("===== Rincian Belanja Sepatu =====");
let totalBelanja = 0;

for (let i = 0; i < sepatu.length; i++) {
    console.log((i + 1) + ". " + sepatu[i].nama + " - Rp. " + sepatu[i].harga);
    totalBelanja += sepatu[i].harga;
}

console.log("");
console.log("Total Belanja = Rp. " + totalBelanja);

// Hitung diskon berdasarkan total belanja
let diskon = 0;
let persenDiskon = 0;

if (totalBelanja < 250000) {
    persenDiskon = 0;
} else if (totalBelanja >= 250000 && totalBelanja < 500000) {
    persenDiskon = 5;
} else if (totalBelanja >= 500000 && totalBelanja < 800000) {
    persenDiskon = 10;
} else if (totalBelanja >= 800000) {
    persenDiskon = 15;
}

diskon = totalBelanja * persenDiskon / 100;

console.log("Diskon = " + persenDiskon + "%");
console.log("Total Setelah Diskon = Rp. " + (totalBelanja - diskon));

// Hitung kembalian
let pembayaran = 1200000;
let kembalian = pembayaran - (totalBelanja - diskon);

console.log("Pembayaran = Rp. " + pembayaran);
console.log("Kembalian = Rp. " + kembalian);
