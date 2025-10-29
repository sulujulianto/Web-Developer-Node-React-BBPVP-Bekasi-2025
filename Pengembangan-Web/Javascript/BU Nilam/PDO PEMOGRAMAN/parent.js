// class Parent
class Parent {
    constructor(greeting) {
        this.greeting = greeting;
    }

    // method Parent
    parentSay() {
        console.log(`${this.greeting}, this is the parent class`);
    }
}

// class Child
class Child extends Parent {
    constructor(greeting, name) {
        super(greeting);
        this.name = name;
    }

    // method Child
    childSay() {
        console.log(`${this.greeting}, ${this.name}, this is the child class`);
    }
}

// instantiate
var parent1 = new Parent("Hai");
parent1.parentSay();

var child1 = new Child("Hallo", "Edo");
child1.childSay();