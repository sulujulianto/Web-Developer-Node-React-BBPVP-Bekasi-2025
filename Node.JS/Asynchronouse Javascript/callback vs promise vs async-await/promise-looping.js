function panggilPasienPromise(nomor) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Memanggil pasien nomor ${nomor}`);
      resolve();
    }, 1000);
  });
}

let chain = Promise.resolve();
for (let i = 1; i <= 3; i++) {
  chain = chain.then(() => panggilPasienPromise(i));
    // a = a+ i
}

chain.then(() => {
  console.log("Semua pasien sudah dipanggil");
});