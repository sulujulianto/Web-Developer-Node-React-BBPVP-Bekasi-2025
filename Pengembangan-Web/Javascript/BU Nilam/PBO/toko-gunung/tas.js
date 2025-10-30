// class Child 1 (tas)

const Produk = require('./produk');

class Tas extends Produk {
    constructor(nama, harga, berat, stok, kapasitas) {
        super(nama, harga, berat, stok);
        this._kapasitas = kapasitas;
    }

    get kapasitas() {
        return `${this._kapasitas} L`;
    }

    // Override method deskripsi untuk menambahkan info kapasitas
    deskripsi() {
        return `${super.deskripsi()} | Kapasitas: ${this.kapasitas}`;
    }
}

module.exports = Tas;