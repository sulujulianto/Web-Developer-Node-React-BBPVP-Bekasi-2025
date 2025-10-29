// Kelas parent
class TIK {
    constructor(nama, umur, jurusan, pemrograman, matematika, database, design, uiux) {
        this.nama = nama;
        this.umur = umur;
        this.jurusan = jurusan;
        this.web = new Web(pemrograman, matematika, database);
        this.visual = new KontenVisual(design, uiux);
    }

    // Method untuk menampilkan hasil akhir
    tampilHasil() {

        
        console.log("Nama:", this.nama);
        console.log("Umur:", this.umur, "tahun");
        console.log("Jurusan:", this.jurusan);

        console.log("\n[Nilai Web Developer]");
        this.web.tampilWeb();

        console.log("\n[Nilai Konten Visual]");
        this.visual.tampilVisual();

        // Hitung rata-rata gabungan dari Web dan Konten Visual
        const rataGabungan = (this.web.rataWeb + this.visual.rataVisual) / 2;
        console.log("\nRata-rata Gabungan Semua Pelatihan:", rataGabungan.toFixed(2));

        // Menentukan kategori kelulusan
        if (rataGabungan >= 90) console.log("Kategori: Sangat Baik");
        else if (rataGabungan >= 80) console.log("Kategori: Baik");
        else if (rataGabungan >= 70) console.log("Kategori: Cukup");
        else if (rataGabungan >= 60) console.log("Kategori: Kurang");
        else console.log("Kategori: Tidak Lulus");
    }
}

// Kelas child 1: Web Developer
class Web {
    constructor(pemrograman, matematika, database) {
        this.pemrograman = pemrograman;
        this.matematika = matematika;
        this.database = database;
        this.rataWeb = (pemrograman + matematika + database) / 3;
    }

    tampilWeb() {
        console.log("  Pemrograman:", this.pemrograman);
        console.log("  Matematika :", this.matematika);
        console.log("  Database   :", this.database);
        console.log("  Rata-rata Web:", this.rataWeb.toFixed(2));
    }
}

// Kelas child 2: Konten Visual
class KontenVisual {
    constructor(design, uiux) {
        this.design = design;
        this.uiux = uiux;
        this.rataVisual = (design + uiux) / 2;
    }

    tampilVisual() {
        console.log("  Design:", this.design);
        console.log("  UI/UX :", this.uiux);
        console.log("  Rata-rata Konten Visual:", this.rataVisual.toFixed(2));
    }
}

// Contoh penggunaan: parent memanggil child di dalamnya
const peserta1 = new TIK("Edo", 20, "Rekayasa Perangkat Lunak", 85, 90, 80, 88, 92);
peserta1.tampilHasil();
