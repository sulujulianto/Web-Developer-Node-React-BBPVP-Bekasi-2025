// Parent class
class TIK {
    constructor(nilaiWeb, nilaiVisual) {
        this.nilaiWeb = nilaiWeb;
        this.nilaiVisual = nilaiVisual;
    }

    // Hitung rata-rata gabungan dari Web & Visual
    hitungRataGabungan(nama, umur, jurusan) {
        const rataGabungan = (this.nilaiWeb + this.nilaiVisual) / 2;
        console.log(`Nama: ${nama}`);
        console.log(`Umur: ${umur} tahun`);
        console.log(`Jurusan: ${jurusan}`);
        console.log(`Nilai Rata-Rata Gabungan (Web + Konten Visual): ${rataGabungan}`);
        
        if (rataGabungan >= 90) console.log("Kategori: Sangat Baik");
        else if (rataGabungan >= 80) console.log("Kategori: Baik");
        else if (rataGabungan >= 70) console.log("Kategori: Cukup");
        else if (rataGabungan >= 60) console.log("Kategori: Kurang");
        else console.log("Kategori: Tidak Lulus");

        return rataGabungan;
    }
}

// Child 1: Web Developer
class Web extends TIK {
    constructor(nama, umur, jurusan, pemrograman, matematika, database) {
        const rataWeb = (pemrograman + matematika + database) / 3;
        super(rataWeb, 0); // sementara nilaiVisual = 0
        this.nama = nama;
        this.umur = umur;
        this.jurusan = jurusan;
        this.pemrograman = pemrograman;
        this.matematika = matematika;
        this.database = database;
        this.rataWeb = rataWeb;
    }

    tampilWeb() {
        console.log(`${this.nama} - Web Developer`);
        console.log(`Nilai: Pemrograman=${this.pemrograman}, Matematika=${this.matematika}, Database=${this.database}`);
        console.log(`Rata-rata Web: ${this.rataWeb}`);
    }
}

// Child 2: Konten Visual
class KontenVisual extends TIK {
    constructor(nama, umur, jurusan, design, uiux) {
        const rataVisual = (design + uiux) / 2;
        super(0, rataVisual); // sementara nilaiWeb = 0
        this.nama = nama;
        this.umur = umur;
        this.jurusan = jurusan;
        this.design = design;
        this.uiux = uiux;
        this.rataVisual = rataVisual;
    }

    tampilVisual() {
        console.log(`${this.nama} - Konten Visual`);
        console.log(`Nilai: Design=${this.design}, UI/UX=${this.uiux}`);
        console.log(`Rata-rata Konten Visual: ${this.rataVisual}`);
    }
}

// Contoh penggunaan
const pesertaWeb = new Web("Edo", 23, "PBL Web Developer", 85, 90, 80);
const pesertaVisual = new KontenVisual("Edo", 23, "PBL Web Developer", 88, 92);

// Tampilkan masing-masing pelatihan
pesertaWeb.tampilWeb();
console.log("--------------------");
pesertaVisual.tampilVisual();
console.log("--------------------");

// Gabungkan nilai Web & Konten Visual melalui Parent (TIK)
const pesertaTIK = new TIK(pesertaWeb.rataWeb, pesertaVisual.rataVisual);
pesertaTIK.hitungRataGabungan(pesertaWeb.nama, pesertaWeb.umur, pesertaWeb.jurusan);
