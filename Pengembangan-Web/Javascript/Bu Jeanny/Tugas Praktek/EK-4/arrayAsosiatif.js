// Array asosiatif (object) tinggi badan
let tinggi = {
  Rose: 178,
  Magnolia: 153,
  Daisy: 165,
  Jasmine: 161,
  Violet: 159,
};

for (let nama in tinggi) {
  console.log(nama + " memiliki tinggi " + tinggi[nama] + " cm");
}
