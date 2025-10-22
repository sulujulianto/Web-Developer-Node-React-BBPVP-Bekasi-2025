// program looping aktivitas di BBPVP Bekasi

console.log('=== AKTIVITAS DI BBPVP BEKASI ===');
console.log('');

// daftar aktivitas
let aktivitas = [
    'Registrasi peserta',
    'Pembukaan pelatihan',
    'Materi JavaScript',
    'Praktek coding',
    'Istirahat',
    'Materi Node.js',
    'Praktek project',
    'Evaluasi',
    'Penutupan'
];

// tampilkan dengan looping
console.log('Jadwal Kegiatan:');
console.log('');

for (let i = 0; i < aktivitas.length; i++) {
    let nomor = i + 1;
    console.log(nomor + '. ' + aktivitas[i]);
}

console.log('');
console.log('Total aktivitas: ' + aktivitas.length);
console.log('');

// looping dengan waktu
console.log('Detail Waktu:');
console.log('');

let jamMulai = 8;

for (let i = 0; i < 5; i++) {
    let jam = jamMulai + i;
    console.log('Jam ' + jam + ':00 - ' + aktivitas[i]);
}

console.log('');
console.log('Program selesai!');
