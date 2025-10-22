// prosedur tanpa parameter
function salam() {
    console.log('Selamat datang di program JavaScript!');
    console.log('Semoga hari Anda menyenangkan');
}

console.log('=== PROSEDUR TANPA PARAMETER ===');
salam();
console.log('');

// prosedur dengan parameter
function sapaNama(nama) {
    console.log('Halo, ' + nama + '!');
    console.log('Selamat belajar JavaScript');
}

console.log('=== PROSEDUR DENGAN PARAMETER ===');
sapaNama('Budi');
console.log('');

// prosedur dengan banyak parameter
function tampilkanData(nama, umur, kota) {
    console.log('Nama: ' + nama);
    console.log('Umur: ' + umur + ' tahun');
    console.log('Kota: ' + kota);
}

console.log('=== PROSEDUR BANYAK PARAMETER ===');
tampilkanData('Andi', 20, 'Jakarta');
console.log('');
tampilkanData('Siti', 22, 'Bandung');
console.log('');

// prosedur dengan perulangan
function cetakAngka(batas) {
    console.log('Menampilkan angka 1 sampai ' + batas);
    for (let i = 1; i <= batas; i++) {
        console.log(i);
    }
}

console.log('=== PROSEDUR DENGAN PERULANGAN ===');
cetakAngka(5);
console.log('');

// prosedur dengan kondisi
function cekKelulusan(nilai) {
    console.log('Nilai: ' + nilai);
    if (nilai >= 75) {
        console.log('Status: LULUS');
    } else {
        console.log('Status: TIDAK LULUS');
    }
}

console.log('=== PROSEDUR DENGAN KONDISI ===');
cekKelulusan(80);
console.log('');
cekKelulusan(60);
