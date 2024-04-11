// // Define initial numbers
// const n1 = 5
// const n2 = 15
// const n3 = 20
// const n4 = 25

// Check if all numbers are divisible by 5. Cache the result in a variable.
// divBy5 = (n1 % 5 === 0 )
// console.log(n1 + " Divisible by 5") // 5 Divisible by 5

// divBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0
// console.log(divBy5) //true

const num1 = 5
const num2 = 15
const num3 = 20
const num4 = 25

console.log( num1 > num4); // flase

// Arithmetic chain:
let Artm = ((num1 - num2)* num3) % num4
console.log( Artm)
