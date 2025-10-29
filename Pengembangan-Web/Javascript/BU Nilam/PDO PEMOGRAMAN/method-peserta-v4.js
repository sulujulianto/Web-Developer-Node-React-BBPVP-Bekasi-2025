class PesertaPelatihan {
    constructor(nama, umur, namaPelatihan, nilai) {
        this.nama = nama;
        this.umur = umur;
        this.namaPelatihan = namaPelatihan;
        this.nilai = nilai;
    }

    cekNilai() {
        if (this.nilai >= 90 && this.nilai <= 100)
            console.log(`${this.nama} (Umur: ${this.umur} tahun) - ${this.namaPelatihan} : Sangat Baik (${this.nilai})`);
        else if (this.nilai >= 80)
            console.log(`${this.nama} (Umur: ${this.umur} tahun) - ${this.namaPelatihan} : Baik (${this.nilai})`);
        else if (this.nilai >= 70)
            console.log(`${this.nama} (Umur: ${this.umur} tahun) - ${this.namaPelatihan} : Cukup (${this.nilai})`);
        else if (this.nilai >= 60)
            console.log(`${this.nama} (Umur: ${this.umur} tahun) - ${this.namaPelatihan} : Kurang (${this.nilai})`);
        else
            console.log(`${this.nama} (Umur: ${this.umur} tahun) - ${this.namaPelatihan} : Tidak Lulus (${this.nilai})`);
    }
}

const peserta1 = new PesertaPelatihan("Edo", 23, "PBL Web Developer", 55);
peserta1.cekNilai();