// javascript operators:

// 1- Arithmetic operators (+ , - , * , / , % )
// these operators are used to perform mathematical operations on numbers

// addition operator (+) is used to add two values together
// example of addition operator (+):
let value1 = 50;
let value2 = 10;
let sum = value1 + value2;
console.log("Sum:", sum);
// we can also add strings using the addition operator:
let firstName = "Ayesha";
let lastName = "Zahid";
let fullName = firstName + " " + lastName; 
console.log("Full Name:", fullName);

// subtraction operator (-) is used to subtract one value from another value
// example of subtraction operator (-):
let num1 = 20;
let num2 = 5;
let difference = num1 - num2;
console.log(difference);

// multiplication operator (*) is used to multiply two values together
// example of multiplication operator (*):
let itemPrice = 500
let items = 3
let bill = itemPrice * items
console.log("Total Bill:", bill)

// division operator (/) is used to divide one value by another value
// example of division operator (/):
let dividend = 100;
let divisor = 4;
let quotient = dividend / divisor;
console.log("Quotient:", quotient);

// modulus operator (%) is used to find the remainder after dividing one value by another value
// example of modulus operator (%):
let dividend2 = 100;
let divisor2 = 4;
let remainder = dividend2 % divisor2;
console.log("Remainder:", remainder);

// 2- Assignment operators (= , += , -= , *= , /= , %= )
// these operators are used to assign values to variables

// assignment operator (=) is used to assign a value to a variable
// example of assignment operator (=):
let x = 10;
console.log("Value of x:", x);

// addition assignment operator (+=) is used to add a value to a variable and assign the result back to the variable
// example of addition assignment operator (+=):
let y = 5;
y += 3; // like y = y + 3
console.log("Value of y:", y);

// subtraction assignment operator (-=) is used to subtract a value from a variable and assign the result back to the variable
// example of subtraction assignment operator (-=):
let z = 10;
z -= 4; // like z = z - 4
console.log("Value of z:", z);

// multiplication assignment operator (*=) is used to multiply a variable by a value and assign the result back to the variable
// example of multiplication assignment operator (*=):
let a = 6;
a *= 2; // like a = a * 2
console.log("Value of a:", a);

// division assignment operator (/=) is used to divide a variable by a value and assign the result back to the variable
// example of division assignment operator (/=):
let b = 20;
b /= 4; // like b = b / 4
console.log("Value of b:", b);

// modulus assignment operator (%=) is used to find the remainder after dividing a variable by a value and assign the result back to the variable
// example of modulus assignment operator (%=):
let c = 15;
c %= 4; // like c = c % 4
console.log("Value of c:", c);


// 3- Comparison operators (== , === , != , !== , > , < , >= , <= ) 
// these operators are used to compare values and return a boolean result (true or false) 

// equality operator (==) is used to compare two values for equality, but it does not check for data type
// example of equality operator (==):
let num3 = 10;
let num4 = "10";
console.log(num3 == num4); // true, because it only checks for value, not data type 

// strict equality operator (===) is used to compare two values for equality, and it also checks for data type
// Smart developers usually prefer  this === operator 
// example of strict equality operator (===):
let num5 = 10;
let num6 = "10";
console.log(num5 === num6); // false, because it checks for both value and data type

// inequality operator (!=) is used to compare two values for inequality, but it does not check for data type
// example of inequality operator (!=):
let enteredPassword = "1234"
let realPassword = 1234
if (enteredPassword != realPassword) {
  console.log("Wrong Password")
}else{
  console.log("Correct Password")
} // true, because it only checks for value, not data type so it dislays "Correct Password"

// strict inequality operator (!==) is used to compare two values for inequality, and it also checks for data type
// example of strict inequality operator (!==):
let enteredPin = "1234"
let realPin = 1234
if (enteredPin !== realPin) {
  console.log("Wrong PIN")
} // false, because it checks for both value and data type

// greater than operator (>) is used to compare if one value is greater than another value
// example of greater than operator (>):
let age = 15;
if (age > 18) {
  console.log("You are an adult.")
} else {
  console.log("You are not an adult.")
}

// less than operator (<) is used to compare if one value is less than another value
// example of less than operator (<):
let temperature = 20;
if (temperature < 25) {
  console.log("It's cold.")
} else {
  console.log("It's not cold.")
}

// greater than or equal to operator (>=) is used to compare if one value is greater than or equal to another value
// example of greater than or equal to operator (>=):
let score = 85;
if (score >= 80) {
  console.log("You passed the exam.")
} else {
  console.log("You did not pass the exam.")
}  

// less than or equal to operator (<=) is used to compare if one value is less than or equal to another value
// example of less than or equal to operator (<=):
let totalBill = 6000;
if (totalBill <= 5000) {
   console.log("No discount available")
} else {
   console.log("You get 10% discount")
}

// 4- Logical operators (&& , || , ! )
// these operators are used to combine multiple conditions and return a boolean result (true or false)

// logical AND operator (&&) is used to check if both conditions are true
// example of logical AND operator (&&):
let Bill = 6000
let member = true

if (Bill > 5000 && member === true) {
  console.log("You get a special discount")
}// while using the AND operator , both conditions must be true for the overall expression to be true

// logical OR operator (||) is used to check if at least one condition is true
// example of logical OR operator (||):
let day = "Saturday"
let isHoliday = true

if (day === "Saturday" || isHoliday === false) {
  console.log("You have the day off!")
}// while using the OR operator , at least one condition must be true for the overall expression to be true

// logical NOT operator (!) is used to negate a condition
// example of logical NOT operator (!):
let isRaining = false
if (!isRaining) {
  console.log("It's a sunny day!")
}// while using the NOT operator , it negates the condition so if condition is false, it becomes true and displays the message and vice versa 


// 5- unary operators ( ++ , -- )
// these operators are used to perform operations on a single operand

// increment operator (++) is used to increase the value of a variable by 1
// example of increment operator (++):
let count = 5;
count++;
console.log("Count after increment:", count); 

// decrement operator (--) is used to decrease the value of a variable by 1
// example of decrement operator (--):
let quantity = 10;
quantity--;
console.log("Quantity after decrement:", quantity);

// 6- ternary operator ( ? : )
// this operator is used to evaluate a condition and return a value based on the result
//general syntax of ternary operator is: condition ? value_if_true : value_if_false

// example of ternary operator ( ? : ):
let marks = 45
let result = marks >= 40 ? "Pass" : "Fail"
console.log(result) 

// Concept of if , else are used in above examples
// Switch case
// this is used to perform different actions based on different conditions
let operator = "+"
let first = 10
let second = 5

switch(operator) {
  case "+":
    console.log(first + second)
    break

  case "-":
    console.log(first - second)
    break

  case "*":
    console.log(first * second)
    break

  case "/":
    console.log(first / second )
    break

  default:
    console.log("Invalid operator")
} 