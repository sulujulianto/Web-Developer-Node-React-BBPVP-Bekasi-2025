class PesertaPelatihan {
    constructor(nama, umur, namaPelatihan, nilai) {
        this.nama = nama;
        this.umur = umur;
        this.namaPelatihan = namaPelatihan;
        this.nilai = nilai;
    }

    cekNilai() {
        let hasil = "";

        if (this.nilai >= 90 && this.nilai <= 100) {
            hasil = "Sangat Baik";
        } else if (this.nilai >= 80 && this.nilai <= 89) {
            hasil = "Baik";
        } else if (this.nilai >= 70 && this.nilai <= 79) {
            hasil = "Cukup";
        } else if (this.nilai >= 60 && this.nilai <= 69) {
            hasil = "Kurang";
        } else if (this.nilai <= 59) {
            hasil = "Tidak Lulus";
        }

        console.log(`${this.nama} (Umur: ${this.umur} tahun) - ${this.namaPelatihan} : ${hasil} (${this.nilai})`);
    }
}

const peserta1 = new PesertaPelatihan("Edo", 23, "PBL Web Developer", 55);
peserta1.cekNilai();