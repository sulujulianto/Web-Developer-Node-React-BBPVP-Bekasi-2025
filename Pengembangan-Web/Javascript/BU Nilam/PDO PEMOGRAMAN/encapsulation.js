// ENCAPSULATION

class Car{
    constructor(brand){
        this._carname = brand;
    }
    get carname() {
    return this._carname;
    }
    set carname() {
        this.carname;
    }
}
// instantiate
newcar = new Car('pajero');
console.log(newcar.carname);
console.log(newcar._carname);

class Car{
    constructor(brand){
        this.#carname = brand;
    }
    get carname() {
    return this.#carname;
    }
    set carname() {
        this.#carname = x;
    }
}

// instantiate
newcar = new Car()
console.log(newcar.#carname);