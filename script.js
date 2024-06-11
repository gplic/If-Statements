// 4 Booleans:
// let x = 10, y = 0, z = "pop", w = "POP"
// console.log(x > y) // true
// console.log(x < y) // false
// console.log(x != y) // true
// console.log(z == w) // false
// console.log(z.toUpperCase() == w) // true


// Example: x = 10 is a boolen exxpresion, why is this wrong
// = is the assignment operator, for assinging data to variables
// == is the equality comparison operator, witch checkes if two values are the same

// Example. Surfs Up.
// var surfHeight = +prompt("How tall are the waves");

// if (surfHeight >= 6) {
//     alert("great day for surfing!");
// };

// Example. Comics.
// var comicChar = prompt("Enter a comic book character");
// if (comicChar.toLowerCase() == "batman") {
//     alert(`${comicChar} is from DC Comics`)
// }

// if (comicChar.toLowerCase() == "wonder woman") {
//     alert(`${comicChar} is from DC Comics`)
// }

// if (comicChar.toLowerCase() == "captian america") {
//     alert(`${comicChar} is from Marvle Comics`)
// }

// if (comicChar.toLowerCase() == "spiderman") {
//     alert(`${comicChar} is from Marvle Comics`)
// }

// Example Secret Number
// const SECRET_NUMBER = Math.floor(Math.random()*11);
// console.log(SECRET_NUMBER);
// let guess = +prompt("Guess a number between 1 and 10");

// if (guess == SECRET_NUMBER) {
//     alert("You guessed it!");
// }
// else {
//     alert("INCORECT");
// }

// Example. Surfs Up Part 2.


// Example. Circle Area.


// Example Secret Number Part 2.


// Example. Even or Odd.


// Example. Surfs Up Part 3.

// // Exersize 1
// let numberPrint = +prompt(`Enter number of copies being printed:`)
// let totalCost = 0
// let numberPerCopy = 0

// if(numberPrint <= 0) {
//     alert ("Can't order that amount");
// } else if (numberPrint <= 99){
//     numberPerCopy = 0.99;
// } else if (numberPrint <= 499){
//     numberPerCopy = 0.28;
// } else if (numberPrint <= 749){
//     numberPerCopy = 0.27;
// } else if (numberPrint <= 1000){
//     numberPerCopy = 0.26;
// } else {
//     numberPerCopy = 0.25;
// }

// totalCost = numberPrint * numberPerCopy;
// alert(`
// Number of copies being printed: $${numberPrint}
// Price per copy: $${numberPerCopy}
// Total cost: $${totalCost.toFixed(2)}`)

// // Exersize 2
// let boxWeight = +prompt("Enter package weight (kg):");
// let boxLength = +prompt("Enter package length (cm):");
// let boxWidth = +prompt("Enter package width (cm):");
// let boxHeight = +prompt("Enter package height (cm):");
// let boxSize = boxHeight*boxLength*boxWidth;
// let message = "message";
// if (boxHeight <= 0 || boxSize <= 0)
// if (boxWeight <= 27 && boxSize <= 100000) {
//     message = ""
// } else if (boxWeight > 27 && boxSize <= 100000) {
//     message = "Too heavy"
// } else if (boxWeight <= 27 && boxSize > 100000) {
//     message = "Too Large"
// } else if (boxWeight > 27 && boxSize > 100000) {
//     message = "Too large and too heavy"
// }

// alert(`Package weight: ${boxWeight}kg
// Package length: ${boxLength}cm
// Package width: ${boxWidth}cm
// Package height: ${boxHeight}cm
// ${message}`)

// // Exersize 3
// let eggAmout = +prompt("Number of eggs:")
// let eggPrice = 0
// let totalCost = 0

// if (eggAmout > 0 && eggAmout < 48) {
//     eggPrice = 0.5/12
//     console.log(eggPrice)
// } else if (eggAmout < 72) {
//     eggPrice = 0.45/12
// } else if (eggAmout < 132) {
//     eggPrice = 0.4/12
// } else {
//     eggPrice = 0.35/12
// }

// totalCost = eggAmout * eggPrice
// alert(`
// Amout of eggs: ${eggAmout}
// Total cost: $${totalCost.toFixed(2)}`)

// Exersize 5

let gradeNum = +prompt("Enter your grade percentage:")
let gradeLet = ""

if (gradeNum < 60) {
    gradeLet = `F`
} else if (gradeNum < 70) {
    gradeLet = `D`
} else if (gradeNum < 80) {
    gradeLet = `C`
} else if (gradeNum < 90) {
    gradeLet = `B`
} else {
    gradeLet = `A`
}

alert(
`Grage percentage: ${gradeNum}%
Grade letter: ${gradeLet}`
)