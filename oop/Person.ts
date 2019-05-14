class Person {
    // Member fields
    name: String;
    age: Number;
    isAlive: Boolean;

    // Constructor
    constructor(name: String, age: Number, isAlive: Boolean) {
        this.name = name;
        this.age = age;
        this.isAlive = isAlive;
    }

    // Method
    displayPersonData(): void {
        console.log(`${this.name} is ${this.age} years old: ${this.isAlive}`);
    }
}

// Person instance
let p = new Person("John", 40, true);
p.displayPersonData();