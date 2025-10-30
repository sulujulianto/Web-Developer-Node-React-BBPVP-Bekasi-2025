function panggilPasienPromise(nomor) {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            console.log(`Memanggil pasien nomor ${nomor}`);
            resolve();  
        },1000)
    })
}

async function jalankanAntarian() {
    await panggilPasienPromise(1);
    await panggilPasienPromise(2);
    await panggilPasienPromise(3);
    console.log("Semua pasien sudah dipanggil!");
}