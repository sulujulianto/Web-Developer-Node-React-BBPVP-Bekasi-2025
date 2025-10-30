// Kelas untuk mengelola keranjang belanja
class Keranjang {
    constructor() {
        this.items = []; // Menyimpan barang dan jumlahnya
    }

    // Tambahkan barang ke keranjang
    tambahProduk(produk, jumlah) {
        if (produk.kurangiStok(jumlah)) {
            this.items.push({ produk, jumlah });
            console.log(`${jumlah} ${produk.nama} ditambahkan ke keranjang.`);
        }
    }

    // Tampilkan isi keranjang dan total harga
    tampilkanCart() {
        console.log("\nIsi Keranjang:");
        if (this.items.length === 0) {
            console.log("Keranjang kosong.");
            return;
        }

        let total = 0;
        this.items.forEach((item, index) => {
            const subtotal = item.produk.harga * item.jumlah;
            console.log(`${index + 1}. ${item.produk.nama} x${item.jumlah} = Rp${subtotal}`);
            total += subtotal;
        });

        console.log(`Total Harga: Rp${total}`);
        return total;
    }

    // Ambil semua item untuk diproses
    getItems() {
        return this.items;
    }

    // Hitung total jumlah barang (bukan harga)
    getTotalJumlahBarang() {
        return this.items.reduce((total, item) => total + item.jumlah, 0);
    }
}

module.exports = Keranjang;