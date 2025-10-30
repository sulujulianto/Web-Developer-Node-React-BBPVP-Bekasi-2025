function panggilPasienPromise(nomor) {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            console.log(`Memanggil pasien nomor ${nomor}`);
            resolve();  
        },1000)
    })
}

panggilPasienPromise(1)
.then (() => panggilPasienPromise(2))
.then (() => panggilPasienPromise(3))
.then (() => {console.log("Semua pasien sudah dipanggil")});