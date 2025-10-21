// perulangan while sederhana
console.log('=== PERULANGAN WHILE SEDERHANA ===');
let i = 1;
while (i <= 5) {
    console.log('Perulangan ke-' + i);
    i++;
}
console.log('');

// perulangan while dengan kondisi
console.log('=== WHILE DENGAN KONDISI ===');
let angka = 1;
while (angka <= 10) {
    if (angka % 2 == 0) {
        console.log(angka + ' adalah bilangan genap');
    }
    angka++;
}
console.log('');

// perulangan do while
console.log('=== PERULANGAN DO WHILE ===');
let j = 1;
do {
    console.log('Nilai j: ' + j);
    j++;
} while (j <= 5);
console.log('');

// perbedaan while dan do while
console.log('=== PERBEDAAN WHILE DAN DO WHILE ===');
console.log('While:');
let x = 10;
while (x < 5) {
    console.log('Ini tidak akan tampil');
    x++;
}
console.log('Loop while tidak jalan');

console.log('');
console.log('Do While:');
let y = 10;
do {
    console.log('Ini akan tampil sekali');
    y++;
} while (y < 5);
console.log('Loop do while jalan minimal 1 kali');
console.log('');

// while untuk jumlah angka
console.log('=== MENJUMLAHKAN ANGKA 1-10 ===');
let n = 1;
let total = 0;
while (n <= 10) {
    total += n;
    n++;
}
console.log('Total: ' + total);
