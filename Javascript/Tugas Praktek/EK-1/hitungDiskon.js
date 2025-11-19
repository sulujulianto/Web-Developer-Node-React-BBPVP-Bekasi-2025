// program kasir makanan
// tugas praktek

// daftar menu
const menu = {
    'Nasi Goreng': 15000,
    'Mie Goreng': 13000,
    'Ayam Goreng': 18000,
    'Es Teh': 5000,
    'Es Jeruk': 6000
};

console.log('===== KASIR MAKANAN =====');
console.log('');

// pesanan pelanggan
const pesanan = [
    { nama: 'Nasi Goreng', jumlah: 2 },
    { nama: 'Ayam Goreng', jumlah: 1 },
    { nama: 'Es Teh', jumlah: 2 }
];

// tampilkan pesanan
console.log('Pesanan:');
let total = 0;

for (let i = 0; i < pesanan.length; i++) {
    let harga = menu[pesanan[i].nama];
    let subtotal = harga * pesanan[i].jumlah;
    console.log(pesanan[i].nama + ' x' + pesanan[i].jumlah + ' = Rp' + subtotal);
    total = total + subtotal;
}

console.log('');
console.log('Total: Rp' + total);

// hitung diskon
let diskon = 0;
if (total >= 100000) {
    diskon = total * 0.15;
    console.log('Diskon 15%: Rp' + diskon);
} else if (total >= 50000) {
    diskon = total * 0.10;
    console.log('Diskon 10%: Rp' + diskon);
} else if (total >= 30000) {
    diskon = total * 0.05;
    console.log('Diskon 5%: Rp' + diskon);
} else {
    console.log('Tidak ada diskon');
}

// total bayar
let totalBayar = total - diskon;
console.log('Total Bayar: Rp' + totalBayar);

// uang yang dibayar
let uang = 60000;
console.log('');
console.log('Uang: Rp' + uang);

// hitung kembalian
let kembalian = uang - totalBayar;
if (kembalian >= 0) {
    console.log('Kembalian: Rp' + kembalian);
} else {
    console.log('Uang kurang Rp' + (kembalian * -1));
}

console.log('');
console.log('Terima kasih!');
