class Orang {
    constructor(nama){
        this.nama = nama;
    }
    get nama() {
        console.log("Mengambil nama");
        return this._nama;
    }
    set nama(value) {
        console.log("Mengubah nama...");
        if (value.legth < 3) {
            console.log("Nama terlalu pendek");
        } else {
            this._nama = value;
        }
    }
}

// instantiate
const orang1 = new Orang("Edo");
console.log(orang1.nama);