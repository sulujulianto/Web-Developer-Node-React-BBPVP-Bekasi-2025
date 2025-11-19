// Parent class
class PesertaPelatihan {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    // hitung rata-rata dari array nilai
    hitungRataRata(nilaiArray) {
        const total = nilaiArray.reduce((a, b) => a + b, 0);
        return total / nilaiArray.length;
    }

    // keterangan nilai berdasarkan rata-rata
    keterangan(nilai) {
        if (nilai >= 90 && nilai <= 100) return "Sangat Baik";
        else if (nilai >= 80 && nilai <= 89) return "Baik";
        else if (nilai >= 70 && nilai <= 79) return "Cukup";
        else if (nilai >= 60 && nilai <= 69) return "Kurang";
        else return "Tidak Lulus";
    }
}

// Child class: Jurusan Komputer
class JurusanKomputer extends PesertaPelatihan {
    constructor(nama, umur, tik, web, komersial) {
        super(nama, umur);
        this.tik = tik;
        this.web = web;
        this.komersial = komersial;
    }

    tampilkanNilai() {
        console.log("=== Jurusan Komputer ===");
        console.log(`TIK        : ${this.tik}`);
        console.log(`Web        : ${this.web}`);
        console.log(`Komersial  : ${this.komersial}`);

        const rata = this.hitungRataRata([this.tik, this.web, this.komersial]);
        const ket = this.keterangan(rata);
        console.log(`Rata-rata Jurusan Komputer: ${rata.toFixed(2)} | ${ket}\n`);
        return rata;
    }
}

// Child class: Jurusan Desain
class JurusanDesain extends PesertaPelatihan {
    constructor(nama, umur, konten, visual) {
        super(nama, umur);
        this.konten = konten;
        this.visual = visual;
    }

    tampilkanNilai() {
        console.log("=== Jurusan Desain ===");
        console.log(`Konten : ${this.konten}`);
        console.log(`Visual : ${this.visual}`);

        const rata = this.hitungRataRata([this.konten, this.visual]);
        const ket = this.keterangan(rata);
        console.log(`Rata-rata Jurusan Desain : ${rata.toFixed(2)} | ${ket}\n`);
        return rata;
    }
}

// === Data Edo ===
const edoKomputer = new JurusanKomputer("Edo", 23, 85, 90, 80);
const edoDesain = new JurusanDesain("Edo", 23, 88, 92);

// === Tampilkan hasil ===
console.log(`Nama: ${edoKomputer.nama}`);
console.log(`Umur: ${edoKomputer.umur} tahun\n`);

const rataKomputer = edoKomputer.tampilkanNilai();
const rataDesain = edoDesain.tampilkanNilai();

// === Rata-rata gabungan ===
const rataKeseluruhan = ((rataKomputer + rataDesain) / 2).toFixed(2);
const peserta = new PesertaPelatihan("Edo", 23);
const catatan = peserta.keterangan(rataKeseluruhan);

console.log("=== RATA-RATA KESELURUHAN ===");
console.log(`Rata-rata 2 jurusan: ${rataKeseluruhan} | ${catatan}`);