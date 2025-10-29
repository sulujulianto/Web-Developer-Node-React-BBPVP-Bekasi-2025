class Car {
    sound() {
        return "vroom... vroom"
    }
}

// instantiate
var mobil1 = new Car();
console.log(mobil1.sound());

// method dengan paramater
class Car {
    // method
    sound(x) {
        return x + ", suara mobil saya vrooom";
    }
}

// instatiate
var mobil1 = new Car();
console.log(mobil1.sound("Haii"));