// membuat array
console.log('=== MEMBUAT ARRAY ===');

let buah = ['Apel', 'Jeruk', 'Mangga', 'Pisang'];
let angka = [10, 20, 30, 40, 50];
let campur = ['Budi', 25, true, 'Jakarta'];

console.log('Array buah:', buah);
console.log('Array angka:', angka);
console.log('Array campur:', campur);
console.log('');

// mengakses elemen array
console.log('=== MENGAKSES ELEMEN ARRAY ===');

console.log('Buah pertama:', buah[0]);
console.log('Buah kedua:', buah[1]);
console.log('Buah terakhir:', buah[3]);
console.log('Angka ketiga:', angka[2]);
console.log('');

// panjang array
console.log('=== PANJANG ARRAY ===');

console.log('Jumlah buah:', buah.length);
console.log('Jumlah angka:', angka.length);
console.log('');

// mengubah elemen array
console.log('=== MENGUBAH ELEMEN ARRAY ===');

console.log('Array sebelum diubah:', buah);
buah[1] = 'Durian';
console.log('Array setelah diubah:', buah);
console.log('');

// menambah elemen array dengan push
console.log('=== MENAMBAH ELEMEN (PUSH) ===');

let hewan = ['Kucing', 'Anjing'];
console.log('Array awal:', hewan);

hewan.push('Burung');
console.log('Setelah push Burung:', hewan);

hewan.push('Ikan');
console.log('Setelah push Ikan:', hewan);
console.log('');

// menghapus elemen terakhir dengan pop
console.log('=== MENGHAPUS ELEMEN TERAKHIR (POP) ===');

console.log('Array sebelum pop:', hewan);
let dihapus = hewan.pop();
console.log('Elemen yang dihapus:', dihapus);
console.log('Array setelah pop:', hewan);
console.log('');

// menambah elemen di awal dengan unshift
console.log('=== MENAMBAH ELEMEN DI AWAL (UNSHIFT) ===');

let warna = ['Merah', 'Kuning'];
console.log('Array awal:', warna);

warna.unshift('Biru');
console.log('Setelah unshift Biru:', warna);
console.log('');

// menghapus elemen pertama dengan shift
console.log('=== MENGHAPUS ELEMEN PERTAMA (SHIFT) ===');

console.log('Array sebelum shift:', warna);
let hapusDepan = warna.shift();
console.log('Elemen yang dihapus:', hapusDepan);
console.log('Array setelah shift:', warna);
console.log('');

// looping array dengan for
console.log('=== LOOPING ARRAY DENGAN FOR ===');

let makanan = ['Nasi Goreng', 'Mie Goreng', 'Bakso', 'Sate'];

for (let i = 0; i < makanan.length; i++) {
    console.log((i + 1) + '. ' + makanan[i]);
}
console.log('');

// looping array dengan forEach
console.log('=== LOOPING ARRAY DENGAN FOREACH ===');

let minuman = ['Teh', 'Kopi', 'Jus', 'Air Mineral'];

minuman.forEach(function(item, index) {
    console.log((index + 1) + '. ' + item);
});
console.log('');

// mencari elemen dengan indexOf
console.log('=== MENCARI ELEMEN (INDEXOF) ===');

let nama = ['Andi', 'Budi', 'Citra', 'Dedi'];
console.log('Array:', nama);

let index = nama.indexOf('Citra');
console.log('Index Citra:', index);

let index2 = nama.indexOf('Eko');
console.log('Index Eko:', index2);
console.log('');

// menggabungkan array dengan concat
console.log('=== MENGGABUNGKAN ARRAY (CONCAT) ===');

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let gabung = arr1.concat(arr2);

console.log('Array 1:', arr1);
console.log('Array 2:', arr2);
console.log('Hasil gabung:', gabung);
console.log('');

// mengambil sebagian array dengan slice
console.log('=== MENGAMBIL SEBAGIAN ARRAY (SLICE) ===');

let huruf = ['A', 'B', 'C', 'D', 'E'];
console.log('Array asli:', huruf);

let potong = huruf.slice(1, 4);
console.log('Slice(1,4):', potong);
console.log('');

// mengurutkan array dengan sort
console.log('=== MENGURUTKAN ARRAY (SORT) ===');

let nilai = [80, 60, 90, 70, 85];
console.log('Array sebelum sort:', nilai);

nilai.sort();
console.log('Array setelah sort:', nilai);
console.log('');

// membalik array dengan reverse
console.log('=== MEMBALIK ARRAY (REVERSE) ===');

let hari = ['Senin', 'Selasa', 'Rabu'];
console.log('Array sebelum reverse:', hari);

hari.reverse();
console.log('Array setelah reverse:', hari);
