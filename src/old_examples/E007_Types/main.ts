/**
 * User defined types example
 */


// Array
let my_numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let odd_numbers: Array<number> = [1, 3, 5, 7, 9];
console.log(my_numbers);
console.log(odd_numbers);


// Tuple
let my_tuple: [string, number];
my_tuple = ["Emily", 35];
console.log(my_tuple);


// Interface
interface Person {
    printInfo(name: string, age: number);
}

let Emily: Person = {
    printInfo(name: string, age: number) {
        console.log(`Name: ${name}\tAge: ${age}`);
    }
}

Emily.printInfo("Emily", 35);


// Enum
enum Color {
    Brown, Green, Blue
};


// Class
class Teacher {
    age: number;
    name: string;
    eye_color: Color;

    constructor(age: number, name: string, eye_color: Color) {
        this.age = age;
        this.name = name;
        this.eye_color = eye_color;
    }

    printDetails() {
        console.log(`Name: ${this.name}\tAge: ${this.age}\tEye color: ${this.eye_color}`);
    }
}

let c: Color = Color.Green;
let e = new Teacher(35, "Emily", c);
e.printDetails();


// Anonymous function
let mul: (_:number, __:number) => number = function (first: number, second: number): number {
    return first * second;
}

console.log(mul(3, 5));


// Generics
function add<T>(arg: T): string {
    return "Argument: " + arg;
}

let first  = add<string>("Emily");
let second = add<number>(3);

console.log(first);
console.log(second);