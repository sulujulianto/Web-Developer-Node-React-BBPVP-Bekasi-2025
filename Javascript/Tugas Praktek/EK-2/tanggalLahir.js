// program tampilkan tanggal lahir

console.log("=== PROGRAM TANGGAL LAHIR ===");
console.log("");

// input tanggal lahir
let tanggal = 3;
let bulan = 7;
let tahun = 2002;

// ubah angka bulan jadi nama bulan
let namaBulan;

switch (bulan) {
  case 1:
    namaBulan = "Januari";
    break;
  case 2:
    namaBulan = "Februari";
    break;
  case 3:
    namaBulan = "Maret";
    break;
  case 4:
    namaBulan = "April";
    break;
  case 5:
    namaBulan = "Mei";
    break;
  case 6:
    namaBulan = "Juni";
    break;
  case 7:
    namaBulan = "Juli";
    break;
  case 8:
    namaBulan = "Agustus";
    break;
  case 9:
    namaBulan = "September";
    break;
  case 10:
    namaBulan = "Oktober";
    break;
  case 11:
    namaBulan = "November";
    break;
  case 12:
    namaBulan = "Desember";
    break;
  default:
    namaBulan = "Bulan tidak valid";
}

// tampilkan hasil
console.log("Tanggal Lahir:");
console.log(tanggal + " " + namaBulan + " " + tahun);
console.log("");

// hitung umur
let tahunSekarang = 2025;
let umur = tahunSekarang - tahun;
console.log("Umur: " + umur + " tahun");
