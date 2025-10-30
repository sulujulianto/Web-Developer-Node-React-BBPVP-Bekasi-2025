function panggilPasienPromise(nomor) {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            console.log(`Memanggil pasien nomor ${nomor}`);
            resolve();  
        },1000)
    })
}

async function jalankanAntarian() {
    for(let i= 1; i <= 3; i++) {
        await panggilPasienPromise(i);
    }
    console.log("Semua pasien sudah dipanggil");
}