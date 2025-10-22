// fungsi dengan return
function tambah(a, b) {
    return a + b;
}

console.log('=== FUNGSI PENJUMLAHAN ===');
let hasil1 = tambah(5, 3);
console.log('5 + 3 = ' + hasil1);

let hasil2 = tambah(10, 20);
console.log('10 + 20 = ' + hasil2);
console.log('');

// fungsi operasi matematika
function kurang(a, b) {
    return a - b;
}

function kali(a, b) {
    return a * b;
}

function bagi(a, b) {
    return a / b;
}

console.log('=== FUNGSI MATEMATIKA ===');
console.log('8 - 3 = ' + kurang(8, 3));
console.log('4 x 5 = ' + kali(4, 5));
console.log('20 / 4 = ' + bagi(20, 4));
console.log('');

// fungsi hitung luas
function luasPersegi(sisi) {
    return sisi * sisi;
}

function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}

function luasSegitiga(alas, tinggi) {
    return 0.5 * alas * tinggi;
}

console.log('=== FUNGSI HITUNG LUAS ===');
console.log('Luas persegi (sisi 5): ' + luasPersegi(5));
console.log('Luas persegi panjang (8x4): ' + luasPersegiPanjang(8, 4));
console.log('Luas segitiga (alas 6, tinggi 4): ' + luasSegitiga(6, 4));
console.log('');

// fungsi konversi
function celciusToFahrenheit(celcius) {
    return (celcius * 9/5) + 32;
}

function meterToKm(meter) {
    return meter / 1000;
}

console.log('=== FUNGSI KONVERSI ===');
console.log('30 Celcius = ' + celciusToFahrenheit(30) + ' Fahrenheit');
console.log('5000 meter = ' + meterToKm(5000) + ' km');
console.log('');

// fungsi cek kondisi
function cekGanjilGenap(angka) {
    if (angka % 2 == 0) {
        return 'Genap';
    } else {
        return 'Ganjil';
    }
}

function cekPositifNegatif(angka) {
    if (angka > 0) {
        return 'Positif';
    } else if (angka < 0) {
        return 'Negatif';
    } else {
        return 'Nol';
    }
}

console.log('=== FUNGSI CEK KONDISI ===');
console.log('Angka 7 adalah ' + cekGanjilGenap(7));
console.log('Angka 10 adalah ' + cekGanjilGenap(10));
console.log('Angka 5 adalah ' + cekPositifNegatif(5));
console.log('Angka -3 adalah ' + cekPositifNegatif(-3));
