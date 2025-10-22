// Array kosong untuk daftar belanja
let daftarBelanja = [];

// Tambahkan tiga barang awal
daftarBelanja.push("Beras");
daftarBelanja.push("Minyak");
daftarBelanja.push("Gula");

// Tambahkan tiga barang lagi
daftarBelanja.push("Telur");
daftarBelanja.push("Sayur");
daftarBelanja.push("Buah");

// Hapus Minyak dari array
let indexMinyak = daftarBelanja.indexOf("Minyak");
daftarBelanja.splice(indexMinyak, 1);

// Urutkan alfabet
daftarBelanja.sort();

// Tampilkan daftar belanja
console.log("Daftar Belanja Ibu Lily :");
for (let i = 0; i < daftarBelanja.length; i++) {
    console.log((i + 1) + ". " + daftarBelanja[i]);
}
