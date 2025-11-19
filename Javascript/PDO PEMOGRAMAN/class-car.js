class Car {
    constructor (brand) {
        this.brand = brand;
    }
}

// instantiate
var mobil1 = new Car ('Mitsubishi');
console.log(mobil1.brand)

mobil1.brand = "toyota";
console.log(mobil1.brand);

var mobil2 = new Car ('Alphard');
console.log(mobil2.brand)