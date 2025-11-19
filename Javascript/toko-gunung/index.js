const Cart = require('./keranjang');
const Checkout = require('./checkout');
const Backpack = require('./tas');
const Boots = require('./sepatu');

// Buat produk dengan stok awal
const tas1 = new Backpack("Tas Gunung 45L", 450000, 1200, 10, 45);
const tas2 = new Backpack("Tas Gunung 60L", 600000, 1500, 5, 60);
const sepatu1 = new Boots("Sepatu Eiger", 800000, 900, 3, 42, true);
const sepatu2 = new Boots("Sepatu Consina", 750000, 850, 4, 40, false);

// Buat keranjang belanja
const keranjang = new Cart();

// Tambahkan barang ke keranjang
keranjang.tambahProduk(tas1, 2); // Beli 2 tas 45L
keranjang.tambahProduk(sepatu1, 1); // Beli 1 sepatu Eiger
keranjang.tambahProduk(tas2, 1); // Beli 1 tas 60L
keranjang.tambahProduk(sepatu2, 1); // Beli 1 sepatu Consina

// Tampilkan isi keranjang
keranjang.tampilkanCart();

// Proses checkout dengan diskon otomatis
const checkout = new Checkout(keranjang);
checkout.proses("Edo");