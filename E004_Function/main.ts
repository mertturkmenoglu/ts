/**
 * Function example
 */

function printName(name: string) {
    console.log(name)
}

function add(first: number, second: number) : number {
    return first + second
}

function printInfo(name: string, age: number): void {
    console.log(`${name} is ${age} years old`)
}

function printAnything(value: any) {
    console.log(value)
}

printName("Emily")

let sum = add(3, 4)
console.log(sum)

printInfo("Emily", 35)
printInfo(undefined, 3)

printAnything(35)
printAnything("Emily")
printAnything(true)
printAnything(null)