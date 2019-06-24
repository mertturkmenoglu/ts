// A Boolean type variable init as false
// The keyword for defining a variable is let
// Variable defining is similar to Kotlin.
// (If you don't know Kotlin, it may not make any sense to you.)
// Kotlin way: var / val (variable / immutable) variableName : variableType = value
// TS way: let variableName : variableType = value
let isAvailable: boolean = false;


// Number type variables
// All numbers are floating point numbers.
// You may write them in different bases.
let answerAsDecimal: number = 42;
let answerAsHexadecimal: number = 0x2a;
let answerAsBinary: number = 0b101010;
let answerAsOctal: number = 0o52;


// String type variables
// They represents textual data like in other languages
// You may use double quotes or single quotes
// Rules are same as in other languages
let planet: string = "earth";
planet = 'mars';


// Template strings. You may assemble different strings in an expression
let person: string = "Jon"
let arrowCount: number = 5
let myString: string = `${person} has ${arrowCount} arrows. If Arya give 1 arrow to ${person}, he will have
${arrowCount + 1} arrows.`


// Good, old arrays. But they are dynamic.
// Two different decleration ways possible
// Old way, JS way: variableType[]
// Or, generic way: Array<yourType>
let students: string[] = ["Rose", "Martha", "Donna", "Amy", "Clara"];
let idNumbers: Array<number> = [123, 234, 345, 456];


// Tuples. Basically: You have an array but your variables are mixed. Different types:
// numbers, strings, booleans, etc. But you know which types you have. So you use tuples.
let workers: [string, number];
workers = ["hello", 10];


// Enumerators.
// enum YourEnumName {value1, value2, value3, ......}
// You may number them. By default, they start from 0.
// You can change the first, rest of them will change too
// You can change all of them
// You may access them like arrays
enum Seasons {Winter = 2, Spring = 4, Summer = 6, Autumn = 8}
let season: Seasons = Seasons.Spring;
let seasonValue: string = Seasons[4];
console.log(season);
console.log(seasonValue);


// "Any"
// TS is statically typed. You need to tell the type to the compiler.
// But you can not always know the type of a variable. You are not sure which type of data will come
// You use "any", it compiles.
let typelessVar: any = 42;
typelessVar = "fourty two";
typelessVar = true;

// Why bother with another type like "any"? You may use "Object"?
// If you use "Object" and call a method on variable, compiler will check if the method
// exist or not. If you use "any" and call a method on variable, it will pass compilation
// and check the method existance on run-time. This type gives you flexibility.

// You can use the type for creating a mixed type array
let myMixedList: any[] = [42, true, "answer"];


// Void
// You don't have "any". You have "nothing". Absence.
// Generally, used in function return types.
// Sometimes, in variable declerations.
function printToScreen(): void {
    console.log("THIS FUNCTION RETURNS NOTHING");
}


// You may assign "undefined" or "null" to void type variables.
// Not that much useful.
let voidTypeVar: void = undefined;


// Null and Undefined types
// They are subtypes of all other types. You may assign this values to any other type of variables.
let nullVar: null = null;
let undefVar: undefined = undefined;


// "Never" type
// TODO: Search Never type


// Object type
// number, string boolean, symbol, null and undefined: These are primitives
// All other types: Object (non-primitive)

// Type assertions
// You "really" know the type of the variable. You take the responsibility and tell the compiler to
// "Treat this as ...." and compiler obeys you. It is like C or Assembly: If you are trying to 
// do something, you can do. You know what you are doing. I don't involve.

// Two syntax type: Angle-bracket or "as" 
let arbitraryValue: any = "string type variable";
let lengthOfString: number = (<string>arbitraryValue).length;

let stringValue: any = "string";
let strLen: number = (stringValue as string).length;