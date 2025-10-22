// Fungsi pembagian dengan pengecekan error
function bagiAngka(a, b) {
  try {
    // Cek kalau pembagi nol
    if (b === 0) {
      throw new Error("Tidak bisa membagi dengan nol!");
    }

    // Cek kalau variabel tidak ditemukan/undefined
    if (a === undefined || b === undefined) {
      throw new Error("Variabel tidak dikenali");
    }

    let hasil = a / b;
    console.log("Hasil pembagian :", hasil);
    return hasil;
  } catch (error) {
    // Tangani error di sini
    console.log("Error:", error.message);
  }
}

// Test case 1: Pembagian normal
console.log("\n=== Test 1: Pembagian Normal ===");
let angka1 = 10;
let angka2 = 5;
bagiAngka(angka1, angka2);

// Test case 2: Pembagian dengan nol
console.log("\n=== Test 2: Pembagian dengan Nol ===");
angka1 = 10;
angka2 = 0;
bagiAngka(angka1, angka2);

// Test case 3: Variabel tidak ditemukan
console.log("\n=== Test 3: Variabel Tidak Dikenali ===");
bagiAngka(angka1, angka22);

console.log("\nProgram selesai.");
