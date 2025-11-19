class PesertaPelatihan {
    constructor(nama, namaPelatihan, nilai) {
        this._nama = nama;
        this._namaPelatihan = namaPelatihan;
        this._nilai = nilai;
    }

    // Getter dan Setter untuk nama
    get nama() {
        return this._nama;
    }

    set nama(value) {
        this._nama = value;
    }

    // Getter dan Setter untuk namaPelatihan
    get namaPelatihan() {
        return this._namaPelatihan;
    }

    set namaPelatihan(value) {
        this._namaPelatihan = value;
    }

    // Getter dan Setter untuk nilai
    get nilai() {
        return this._nilai;
    }

    set nilai(value) {
        if (value < 0 || value > 100) {
            console.log("Nilai harus antara 0 - 100!");
        } else {
            this._nilai = value;
        }
    }

    // Getter tambahan untuk deskripsi nilai
    get deskripsiNilai() {
        if (this._nilai >= 90) {
            return `Sangat Baik (${this._nilai})`;
        } else if (this._nilai >= 80) {
            return `Baik (${this._nilai})`;
        } else if (this._nilai >= 70) {
            return `Cukup (${this._nilai})`;
        } else if (this._nilai >= 60) {
            return `Kurang (${this._nilai})`;
        } else {
            return `Tidak Lulus (${this._nilai})`;
        }
    }

    tampilkanNilai() {
        console.log(`${this._nama} (${this._namaPelatihan}) : ${this.deskripsiNilai}`);
    }
}

// Contoh penggunaan
const peserta1 = new PesertaPelatihan("Edo", "PBL Web Developer", 55);
peserta1.tampilkanNilai();

// Ubah nilai menggunakan setter
peserta1.nilai = 85;
peserta1.tampilkanNilai();

// Coba nilai tidak valid
peserta1.nilai = 200; // akan muncul peringatan