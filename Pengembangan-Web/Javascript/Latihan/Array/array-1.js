//Array 1d
console.log("Array 1d");

let buah = ["apel", "jeruk", "mangga", "pir"];
console.log(buah[1])
console.log(buah[3])
console.log

//Array object
console.log("Array object")
let mobil = [
    {merk :"BMW",warna:"merah",tipe:"sedan"},
    {merk :"toyota",warna:"hitam",tipe:"box"},
    {merk :"audi",warna:"biru",tipe:"sedan"}
];

console.log(mobil[1].tipe);
console.log(mobil[2].merk);
console.log

//Panjang Array
console.log("Panjang Array");
console.log(buah.length);
console.log(mobil.length);
console.log;

//foreach
console.log("foreach array");
buah.forEach(function(elemen,index){
    console.log("index ke - " + index +": " + elemen)
});
console.log();

//foreach object
console.log("foreach array");
mobil.forEach(function(item,index){
    console.log('mobil ke-$(index + 1):');
    console.log('merk : ${item.merk}');
    console.log('warna : ${item.warna}');
    console.log('tipe : ${item.tipe}');
});
console.log();

// Map
console.log("Array Map");
let arrayWarna = mobil.map(function(item){
    return item.warna
});
console.log(arrayWarna);
console.log();

//Filters
console.log("ArrayFilter");
let arrayMobilFilter = mobil.filter(function(item){
    return item.tipe != "sedan";
})
console.log(arrayMobilFilter);