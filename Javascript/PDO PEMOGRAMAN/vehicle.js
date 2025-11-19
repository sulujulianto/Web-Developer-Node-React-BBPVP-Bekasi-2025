class Car {
    constructor(brand){
        this.brand = brand;
    }
    info() {
        console.log(`car brand : ${this.brand}.`);
    }
}

module.exports = Car;