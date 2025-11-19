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

        return `${this.nama} (Umur: ${this.umur} tahun) - ${this.namaPelatihan} : ${hasil} (${this.nilai})`;
    }
}

// Contoh penggunaan:
const peserta1 = new PesertaPelatihan("Edo", 23, "PBL Web Developer", 55);

// bisa disimpan ke variabel
const hasilEdo = peserta1.cekNilai();

// atau langsung ditampilkan
console.log(hasilEdo);