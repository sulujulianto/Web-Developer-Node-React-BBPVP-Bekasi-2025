// parent
interface Animal {
    nama: String;
    suara(): void;
}

interface Category {
    deskripsi: String;
}

// child
class Cat implements Animal, Category {
    nama: String;
    deskripsi: String;

    constructor(nama: String, deskripsi: String) {
        this.nama = nama;
        this.deskripsi = deskripsi;
    }
    suara(): void {
        console.log(`${this.nama} ${this.deskripsi} says meow`)
    }
}
// instatiate
const kucing1 = new Cat("Kitty", "mamalia");
kucing1.suara();