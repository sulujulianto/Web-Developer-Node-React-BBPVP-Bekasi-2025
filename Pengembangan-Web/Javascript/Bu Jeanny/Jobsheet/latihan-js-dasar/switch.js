// contoh switch case untuk hari
console.log('=== SWITCH CASE HARI ===');
let hari = 3;
let namaHari;

switch (hari) {
    case 1:
        namaHari = 'Senin';
        break;
    case 2:
        namaHari = 'Selasa';
        break;
    case 3:
        namaHari = 'Rabu';
        break;
    case 4:
        namaHari = 'Kamis';
        break;
    case 5:
        namaHari = 'Jumat';
        break;
    case 6:
        namaHari = 'Sabtu';
        break;
    case 7:
        namaHari = 'Minggu';
        break;
    default:
        namaHari = 'Hari tidak valid';
}

console.log('Hari ke-' + hari + ' adalah ' + namaHari);
console.log('');

// contoh switch case untuk nilai
console.log('=== SWITCH CASE NILAI ===');
let grade = 'B';

switch (grade) {
    case 'A':
        console.log('Sangat Baik');
        break;
    case 'B':
        console.log('Baik');
        break;
    case 'C':
        console.log('Cukup');
        break;
    case 'D':
        console.log('Kurang');
        break;
    case 'E':
        console.log('Sangat Kurang');
        break;
    default:
        console.log('Nilai tidak valid');
}
console.log('');

// contoh switch case untuk operator
console.log('=== SWITCH CASE KALKULATOR ===');
let angka1 = 10;
let angka2 = 5;
let operator = '+';
let hasil;

switch (operator) {
    case '+':
        hasil = angka1 + angka2;
        break;
    case '-':
        hasil = angka1 - angka2;
        break;
    case '*':
        hasil = angka1 * angka2;
        break;
    case '/':
        hasil = angka1 / angka2;
        break;
    default:
        hasil = 'Operator tidak valid';
}

console.log(angka1 + ' ' + operator + ' ' + angka2 + ' = ' + hasil);
