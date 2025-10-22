// SORT
// Urut Alfabet
console.log("Urut Alfabet");
let nama = ["Saif", "Yoga", "Selly", "Ika"];
nama.sort();
console.log(nama);
console.log();

// Urut Descending
console.log("Urut Descending");
let angkaDesc = [40, 100, 1, 5, 25, 10];
angkaDesc.sort(function (a, b) {
  return b - a; // urut naik berarti return a - b
});
console.log(angkaDesc);
console.log();

// Urut Object
console.log("Urut Object");
let siswa = [
  { nama: "Ali", nilai: 85 },
  { nama: "Budi", nilai: 92 },
  { nama: "Cici", nilai: 75 },
];

// arrow function
siswa.sort((a, b) => b.nilai - a.nilai);
console.log(siswa);
console.log();

// cara lain
siswa.sort(function (a, b) {
  return a.nilai - b.nilai;
});
console.log(siswa);
