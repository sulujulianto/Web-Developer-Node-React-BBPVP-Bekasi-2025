// program hitung luas dan keliling bangun datar

// fungsi untuk persegi panjang
function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}

function kelilingPersegiPanjang(panjang, lebar) {
    return 2 * (panjang + lebar);
}

// fungsi untuk persegi
function luasPersegi(sisi) {
    return sisi * sisi;
}

function kelilingPersegi(sisi) {
    return 4 * sisi;
}

// fungsi untuk segitiga
function luasSegitiga(alas, tinggi) {
    return 0.5 * alas * tinggi;
}

function kelilingSegitiga(sisi1, sisi2, sisi3) {
    return sisi1 + sisi2 + sisi3;
}

// fungsi untuk lingkaran
function luasLingkaran(jariJari) {
    return 3.14 * jariJari * jariJari;
}

function kelilingLingkaran(jariJari) {
    return 2 * 3.14 * jariJari;
}

// prosedur tampilkan hasil
function tampilkanHasil(bentuk, luas, keliling) {
    console.log('=== ' + bentuk + ' ===');
    console.log('Luas: ' + luas);
    console.log('Keliling: ' + keliling);
    console.log('');
}

// program utama
console.log('=== PROGRAM HITUNG BANGUN DATAR ===');
console.log('');

// hitung persegi panjang
let p = 10;
let l = 5;
let luasPP = luasPersegiPanjang(p, l);
let kelilingPP = kelilingPersegiPanjang(p, l);
tampilkanHasil('PERSEGI PANJANG (p=' + p + ', l=' + l + ')', luasPP, kelilingPP);

// hitung persegi
let sisi = 8;
let luasP = luasPersegi(sisi);
let kelilingP = kelilingPersegi(sisi);
tampilkanHasil('PERSEGI (sisi=' + sisi + ')', luasP, kelilingP);

// hitung segitiga
let alas = 6;
let tinggi = 8;
let sisi1 = 6;
let sisi2 = 8;
let sisi3 = 10;
let luasS = luasSegitiga(alas, tinggi);
let kelilingS = kelilingSegitiga(sisi1, sisi2, sisi3);
tampilkanHasil('SEGITIGA (alas=' + alas + ', tinggi=' + tinggi + ')', luasS, kelilingS);

// hitung lingkaran
let r = 7;
let luasL = luasLingkaran(r);
let kelilingL = kelilingLingkaran(r);
tampilkanHasil('LINGKARAN (r=' + r + ')', luasL, kelilingL);

console.log('Program selesai!');
