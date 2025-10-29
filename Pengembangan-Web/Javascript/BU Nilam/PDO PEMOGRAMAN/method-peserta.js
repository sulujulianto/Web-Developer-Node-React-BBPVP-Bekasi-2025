class PesertaPelatihan {
    constructor(nama, namaPelatihan, nilai) {
        this.nama = nama;
        this.namaPelatihan = namaPelatihan;
        this.nilai = nilai;
    }

    cekNilai() {
        if (this.nilai >= 90 && this.nilai <= 100) {
            console.log(`${this.nama} (${this.namaPelatihan}) : Sangat Baik (${this.nilai})`);
        } else if (this.nilai >= 80 && this.nilai <= 89) {
            console.log(`${this.nama} (${this.namaPelatihan}) : Baik (${this.nilai})`);
        } else if (this.nilai >= 70 && this.nilai <= 79) {
            console.log(`${this.nama} (${this.namaPelatihan}) : Cukup (${this.nilai})`);
        } else if (this.nilai >= 60 && this.nilai <= 69) {
            console.log(`${this.nama} (${this.namaPelatihan}) : Kurang (${this.nilai})`);
        } else if (this.nilai <= 59) {
            console.log(`${this.nama} (${this.namaPelatihan}) : Tidak Lulus (${this.nilai})`);
        }
    }
}

const peserta1 = new PesertaPelatihan("Edo", "PBL Web Developer", 55);
peserta1.cekNilai();