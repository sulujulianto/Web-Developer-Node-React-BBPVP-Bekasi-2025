class PesertaPelatihan {
    constructor(nama, umur, namaPelatihan, nilai) {
        this.nama = nama;
        this.umur = umur;
        this.namaPelatihan = namaPelatihan;
        this.nilai = nilai;
    }

    cekNilai() {
        const hasil =
            this.nilai >= 90 ? "Sangat Baik" :
            this.nilai >= 80 ? "Baik" :
            this.nilai >= 70 ? "Cukup" :
            this.nilai >= 60 ? "Kurang" : "Tidak Lulus";

        console.log(`${this.nama} (Umur: ${this.umur} tahun) - ${this.namaPelatihan} : ${hasil} (${this.nilai})`);
    }
}

const peserta1 = new PesertaPelatihan("Edo", 23, "PBL Web Developer", 55);
peserta1.cekNilai();