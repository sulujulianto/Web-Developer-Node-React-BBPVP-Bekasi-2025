//menambah elemen di akhir
console.log ("menambah elemen di akhir");
let buah = ["apel", "jeruk"];
buah.push("anggur");
console.log(buah);
console.log

//menghapus elemen di akhir
console.log("Menghapus elemen di akhir");
let buah1 = ["apel", "mangga", "jeruk"];
buah1.pop
console.log(buah1);
console.log

//menambah elemen di awal
let buah2 = ["jeruk", "mangga"];
buah2.unshift("stroberi");
console.log(buah2);
console.log

//menghapus elemen di awal
let buah3 = ["strpberi", "jeruk", "mangga"];
buah3.shift();
console.log(buah3);
console.log();

//menambah elemen di posisi tertentu
let angka1 = [1,2,4,5];
angka1.splice(2,0,3);
console.log(angka1);
console.log();

//mengambil elemen di posisi tertentu
let angka2 = [1,2,4,5];
angka1.splice(2,2);
console.log(angka2);
console.log();

//mengambil sebagian array
let angka3 = [1,2,3,4,5];
// start indeks 1
// sampai sebelum indeks 4
let potong = angka3.slice(1,4);
console.log(angka3);
console.log(potong);
console.log();


