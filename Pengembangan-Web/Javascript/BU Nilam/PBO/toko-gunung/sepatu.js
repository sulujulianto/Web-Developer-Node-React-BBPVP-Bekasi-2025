// class Child 2 (sepatu)

const Produk = require('./produk');

class Sepatu extends Produk {
    constructor(nama, harga, berat, stok, ukuran, waterproof) {
        super(nama, harga, berat, stok);
        this._ukuran = ukuran;
        this._waterproof = waterproof;
    }

    get ukuran() {
        return this._ukuran;
    }

    get waterproof() {
        return this._waterproof ? "Ya" : "Tidak";
    }

    // Override method deskripsi untuk menambahkan info ukuran dan waterproof
    deskripsi() {
        return `${super.deskripsi()} | Ukuran: ${this.ukuran} | Waterproof: ${this.waterproof}`;
    }
}

module.exports = Sepatu;