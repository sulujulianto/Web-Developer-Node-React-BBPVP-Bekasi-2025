// contoh percabangan if
console.log('=== PERCABANGAN IF ===');
let nilai = 80;

if (nilai >= 75) {
    console.log('Selamat, kamu lulus!');
}
console.log('');

// contoh if else
console.log('=== PERCABANGAN IF ELSE ===');
let umur = 17;

if (umur >= 18) {
    console.log('Anda sudah dewasa');
} else {
    console.log('Anda masih anak-anak');
}
console.log('');

// contoh if else if
console.log('=== PERCABANGAN IF ELSE IF ===');
let score = 85;

if (score >= 90) {
    console.log('Nilai: A');
} else if (score >= 80) {
    console.log('Nilai: B');
} else if (score >= 70) {
    console.log('Nilai: C');
} else if (score >= 60) {
    console.log('Nilai: D');
} else {
    console.log('Nilai: E');
}
console.log('');

// contoh nested if
console.log('=== NESTED IF ===');
let username = 'admin';
let password = '12345';

if (username == 'admin') {
    if (password == '12345') {
        console.log('Login berhasil');
    } else {
        console.log('Password salah');
    }
} else {
    console.log('Username tidak ditemukan');
}
