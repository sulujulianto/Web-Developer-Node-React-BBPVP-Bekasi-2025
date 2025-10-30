// class Parent untuk semua produk

class Produk {
    constructor(nama, harga, berat, stok) {
        this._nama = nama;
        this._harga = harga;
        this._berat = berat;
        this._stok = stok;
    }

    get nama() {
        return this._nama;
    }

    get harga() {
        return this._harga;
    }

    get berat() {
        return this._berat;
    }

    get stok() {
        return this._stok;
    }

    // Kurangi stok saat barang dibeli
    kurangiStok(jumlah) {
        if (this._stok >= jumlah) {
            this._stok -= jumlah;
            return true;
        } else {
            console.log(`Stok ${this._nama} tidak cukup. Tersisa: ${this._stok}`);
            return false;
        }
    }

    // Menampilkan deskripsi barang
    deskripsi() {
        return `${this._nama} (Rp${this._harga}) - Berat: ${this._berat} gram - Stok: ${this._stok}`;
    }
}

module.exports = Produk;