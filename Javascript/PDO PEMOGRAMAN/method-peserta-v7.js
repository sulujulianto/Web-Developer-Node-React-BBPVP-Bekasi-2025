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

        return {
            nama: this.nama,
            umur: this.umur,
            pelatihan: this.namaPelatihan,
            nilai: this.nilai,
            hasil: hasil
        };
    }
}

const peserta1 = new PesertaPelatihan("Edo", 23, "PBL Web Developer", 55);
const dataEdo = peserta1.cekNilai();

console.log(dataEdo);