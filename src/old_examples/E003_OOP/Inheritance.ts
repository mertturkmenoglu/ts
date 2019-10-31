class Animal {
    private name: String;
    
    constructor(name: String) {
        this.name = name;
    }

    public eat(object: String) {
        console.log(this.name + " eats " + object);
    }
}

class Squirrel extends Animal {
    eat() {
        super.eat("nuts");
    }
}

class Cat extends Animal {
    eat() {
        super.eat("mice");
    }
}

var alfTheSquirrel = new Squirrel("Alf");
var marmeladeTheCat: Animal = new Cat("Marmelade")

alfTheSquirrel.eat();
marmeladeTheCat.eat("Mice");

