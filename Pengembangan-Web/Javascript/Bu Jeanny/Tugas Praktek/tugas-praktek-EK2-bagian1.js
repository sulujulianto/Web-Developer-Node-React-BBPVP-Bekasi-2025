// program hitung total belanja dengan diskon

console.log('=== PROGRAM HITUNG BELANJA ===');
console.log('');

// data belanja
let namaBarang1 = 'Buku Tulis';
let hargaBarang1 = 5000;
let jumlahBarang1 = 10;

let namaBarang2 = 'Pensil';
let hargaBarang2 = 3000;
let jumlahBarang2 = 5;

let namaBarang3 = 'Penghapus';
let hargaBarang3 = 2000;
let jumlahBarang3 = 3;

// hitung subtotal
let subtotal1 = hargaBarang1 * jumlahBarang1;
let subtotal2 = hargaBarang2 * jumlahBarang2;
let subtotal3 = hargaBarang3 * jumlahBarang3;

// tampilkan detail
console.log('Detail Belanja:');
console.log(namaBarang1 + ' - ' + jumlahBarang1 + ' x Rp' + hargaBarang1 + ' = Rp' + subtotal1);
console.log(namaBarang2 + ' - ' + jumlahBarang2 + ' x Rp' + hargaBarang2 + ' = Rp' + subtotal2);
console.log(namaBarang3 + ' - ' + jumlahBarang3 + ' x Rp' + hargaBarang3 + ' = Rp' + subtotal3);
console.log('');

// total sebelum diskon
let totalBelanja = subtotal1 + subtotal2 + subtotal3;
console.log('Total Belanja: Rp' + totalBelanja);

// cek diskon
let diskon = 0;
let persenDiskon = 0;

if (totalBelanja > 100000) {
    persenDiskon = 10;
    diskon = totalBelanja * 0.10;
} else if (totalBelanja > 50000) {
    persenDiskon = 5;
    diskon = totalBelanja * 0.05;
} else {
    console.log('Tidak dapat diskon');
}

// tampilkan diskon
if (diskon > 0) {
    console.log('Diskon ' + persenDiskon + '%: Rp' + diskon);
}

// total setelah diskon
let totalBayar = totalBelanja - diskon;
console.log('Total Bayar: Rp' + totalBayar);
console.log('');
console.log('Terima kasih!');
