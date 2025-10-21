// perulangan for sederhana
console.log('=== PERULANGAN FOR SEDERHANA ===');
for (let i = 1; i <= 5; i++) {
    console.log('Perulangan ke-' + i);
}
console.log('');

// perulangan for dengan array
console.log('=== PERULANGAN FOR DENGAN ARRAY ===');
let buah = ['Apel', 'Jeruk', 'Mangga', 'Pisang'];

for (let i = 0; i < buah.length; i++) {
    console.log((i + 1) + '. ' + buah[i]);
}
console.log('');

// perulangan for dengan bilangan genap
console.log('=== BILANGAN GENAP 1-10 ===');
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}
console.log('');

// perulangan for mundur
console.log('=== PERULANGAN MUNDUR ===');
for (let i = 5; i >= 1; i--) {
    console.log('Hitung mundur: ' + i);
}
console.log('Selesai!');
console.log('');

// perulangan for untuk tabel perkalian
console.log('=== TABEL PERKALIAN 5 ===');
let angka = 5;
for (let i = 1; i <= 10; i++) {
    console.log(angka + ' x ' + i + ' = ' + (angka * i));
}
console.log('');

// nested for untuk pola bintang
console.log('=== POLA BINTANG ===');
for (let i = 1; i <= 5; i++) {
    let bintang = '';
    for (let j = 1; j <= i; j++) {
        bintang += '*';
    }
    console.log(bintang);
}
