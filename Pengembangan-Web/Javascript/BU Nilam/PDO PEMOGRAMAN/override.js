// POLYMORPHISM - OVERRIDE
class Vehicle {
    sound() {
        console.log("This Vehicle makes a sound!")
    }
}
// child
class Car extends Vehicle{
    sound() {
        console.log("Vroom... vroom")
    }
}
// child 2
class Bike extends Vehicle{
    sound() {
        console.log("Ring... Ring")
    }
}
// instatiate
var vehicle1 = new Vehicle();
vehicle1.sound();
var vehicle2 = new Car();
vehicle2.sound();
var vehicle3 = new Bike();
vehicle3.sound();