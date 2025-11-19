// Kelas untuk proses checkout dan perhitungan diskon
class Checkout {
    constructor(cart) {
        this.cart = cart;
    }

    // Hitung diskon berdasarkan jumlah barang dan total harga
    hitungDiskon(totalHarga, totalJumlah) {
        let diskon = 0;

        // Diskon berdasarkan jumlah barang
        if (totalJumlah >= 5) {
            diskon += 10; // 10% jika beli 5 atau lebih
        } else if (totalJumlah >= 3) {
            diskon += 5; // 5% jika beli 3 atau lebih
        }

        // Diskon berdasarkan total harga
        if (totalHarga >= 2000000) {
            diskon += 10; // Tambahan 10% jika total >= 2 juta
        } else if (totalHarga >= 1000000) {
            diskon += 5; // Tambahan 5% jika total >= 1 juta
        }

        // Maksimal diskon gabungan adalah 20%
        return Math.min(diskon, 20);
    }

    // Proses checkout dan cetak struk
    proses(namaPembeli) {
        const items = this.cart.getItems();
        if (items.length === 0) {
            console.log("Keranjang kosong, tidak bisa checkout.");
            return;
        }

        console.log("\n=== Struk Pembelian ===");
        console.log(`Nama Pembeli: ${namaPembeli}`);
        console.log("Daftar Belanja:");

        let totalAwal = 0;
        items.forEach(item => {
            const subtotal = item.produk.harga * item.jumlah;
            console.log(`- ${item.produk.nama} x${item.jumlah} = Rp${subtotal}`);
            totalAwal += subtotal;
        });

        const totalJumlah = this.cart.getTotalJumlahBarang();
        const diskonPersen = this.hitungDiskon(totalAwal, totalJumlah);
        const diskonRupiah = totalAwal * (diskonPersen / 100);
        const totalAkhir = totalAwal - diskonRupiah;

        console.log(`\nTotal Awal: Rp${totalAwal}`);
        console.log(`Diskon: ${diskonPersen}% (Rp${diskonRupiah})`);
        console.log(`Total Akhir: Rp${totalAkhir}`);
        console.log("Terima kasih telah berbelanja!");
    }
}

module.exports = Checkout;