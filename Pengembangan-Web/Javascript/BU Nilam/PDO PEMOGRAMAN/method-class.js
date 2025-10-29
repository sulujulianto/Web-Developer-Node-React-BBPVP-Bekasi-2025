// Class dengan percabangan
class Laptop{
    constructor(merek, baterai){
        this.merek = merek;
        this.baterai = baterai;
    }
    //method
    cekBaterai() {
        if (this.baterai1 >= 80) {
            console.log(`${this.merek} : baterai Penuh (${this.baterai}%)`);
        } else if (this.baterai >=30){
            console.log(`${this.merek} : baterai Sedang (${this.baterai}%)`);
        } else {
            console.log(`${this.merek} : baterai Lemah (${this.baterai}%)`);
        }
    }
}

// instantiate
const laptop1 = new Laptop("Asus", 90);
laptop1.cekBaterai();