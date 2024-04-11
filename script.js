console.log("We live in the building!!!")

// var pollution = "sucks" // pollutes window object
let pollution = "avoided"

// (let and const) vs. var
{
  var x = 1;
  {
    var x = 2;  // same variable!
    // console.log(x);  // 2
  }
  // console.log(x);  // 2
  {
    var x = 100
  }
  var x = "im disrespectful"
  console.log(x)
}

{
  let x = 1;
  {
    let x = 2;  // different variable
    console.log(x);  // 2
    {
      console.log(`line 27: inner inner scope ${x}`) // 2
    }
  }

  {
    const x = "cool"
    console.log(x) // cool
  }
  console.log(x);  // 1
}

let x1 = 10;

{
	let y = 5;
	{
		let z = x1 + y;
   
	}
  // console.log(z); // will give a Reference Error
}

// If statements
let num = 10
// num++
if (num === 10) {
  console.log("The number is 10!")
} else {
  console.log("The number is NOT 10 :(")
}

if (num > 10) {
  num++
  console.lo("Increment!")
} else {
  num--
  console.log("Decrement!")
}
console.log(num) // 9

// stand alone
const katie = "is cool"
if (katie === "is cool") {
  console.log("The COOLEST!!")
}

//"Truthy" and "Falsy" w/ if statements
// will it execute?
if (42) {} // yes
if ("0") {} // yes
if ("false") {} // yes
if (-42) {} // yes
if (Infinity) {} // yes
if (false) {} //no
if ("") {} // no
if (0) {} //no

let varibale;

if (varibale) {
  console.log("It exists!")
}

const response = ""

if (response) {
  console.log("process data")
} else {
  console.log("Failed to fetch resource")
}

let someVar; // undefined - falsy
// ! NOT operator negates the falsy value to truthy
if (!someVar) {
  someVar = "something"
}
console.log(someVar)

// Exercise 1
let num3 = -10;
if (num3 > 0) {
  console.log(num3 + " positive number")
} else {
  console.log(num3 + " negative number")
}

//Exercise 2
let age = 18;
if (age >= 18) {
  console.log("Access Granted!")
} else {
  console.log("Access Denied :(")
}

// Nested if...else statements
let age1 = 17
let hungry = true
let peference = "Dine in"

if (age1 >= 18) {
  if (age1 >= 21) {
    console.log("Hand is unmarked")
  } else {
    console.log("Big ole X")
  }
} else {
  if (hungry) {
    if (peference === "Dine in") {
      console.log("Cheesecake Factory")
    } else {
      console.log("McDonalds")
    }
  } else {
    console.log("Go rollerskating")
  }
}

// chained if...else
const x5 = 10
if (x5 > 10) {
	console.log("greater")
} else if (x5 < 10) {
	console.log("less")
} else {
	console.log("equal")
}


// Exercise 3
let number = 70;

if (number < 0) {
  console.log("number is negative")
} else if (number <= 99) {
  console.log("number is positive but less than 100")
} else {
  console.log("number is positive and greater than 100")
}


// Exercise 4
// let grade = 100;

// if (grade >= 90) {
//   console.log("A")
// } else if (grade >= 80 && grade <= 89) {
//   console.log("B")
// } else if (grade >= 70 && grade <= 79) {
//   console.log("C")
// } else if (grade >= 55 && grade <= 69) {
//   console.log("D")
// } else if (grade >= 0 && grade < 55) {
//   console.log("F")
// } else {
//   console.log("Please enter valid grade.")
// }


let grade = 90;

if (grade >= 90) {
  console.log("A")
} else if (grade >= 80) {
  console.log("B")
} else if (grade >= 70) {
  console.log("C")
} else if (grade >= 55) {
  console.log("D")
} else if (grade >= 0) {
  console.log("F")
} else {
  console.log("Please enter valid grade.")
}

// Switch Statement
let x7 = '0';
switch (x7) {
  case '1':
       // do something...
      break;
  case '2':
       // do something...
      break;
  default:
       // do something...
      break;
}

// Switch Example
let x10 = 5;
let y10 = 4;
let operand = "+";
switch (operand) {
  case "+":
      console.log(x10 + y10);
      break;
  case "-":
      console.log(x10 - y10);
      break;
  case "*":
      console.log(x10 * y10);
      break
  case "/":
      console.log(x10 / y10);
      break;
  default:
      console.log("Invalid Operand")
}

// Tenary Operators
// let x = 10;
// let isTen;

// if (x == 10) {
// 	isTen = true;
// } else {
// 	isTen = false;
// }

// VS. the code below 

let x11 = 10;
let isTen = x11 == 10 ? true : false;

console.log(11 === 10 ? true : false)

let inp = 10;

if (inp < 0) {
	console.log("Negative!");
} else {
	throw "Error - I don't know what I'm doing.";
}

console.log("Does this log?");