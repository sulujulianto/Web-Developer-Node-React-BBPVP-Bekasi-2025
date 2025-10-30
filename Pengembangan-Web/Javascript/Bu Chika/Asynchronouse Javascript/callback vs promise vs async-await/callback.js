// callback
function panggilPasien(nomor, callback) {
    setTimeout(() => {
        console.log(`Memanggil pasien nomor ${nomor}`);
        callback();
    },1000);
}

panggilPasien(1, () => {
    panggilPasien(2, () =>{
        panggilPasien(3, () =>{
            console.log("Semua pasien sudah dipanggil!");
        })
    })
})