// Task no 16: Number Methods in JavaScript


//Method 1: toFixed()
// It rounds a number and keeps a fixed number of decimal places.
let price = 234.567
console.log(price.toFixed(2))


// Method 2: toString()
// It converts a number into a string
let num = 100
console.log(num.toString())//converts number to string
console.log(num.toString(2))//converts number to binary 
console.log(num.toString(8))//converts number to octal
console.log(num.toString(16))//converts number to hexadecimal
console.log(typeof num.toString())//to check the type of value after conversion to string


// Method 3: toPrecision()
// It formats a number to a specified total number of digits.
let num2 = 123.456
console.log(num2.toPrecision(4))


// Method 4: Number()
// It converts a value (like string) into a number.
let price2 = "500"
console.log(Number(price2))


// Method 5: parseInt()
// It converts a value into a whole number (integer), even written in a string.
let price3 = "99.75"
console.log(parseInt(price3))


// Method 6: parseFloat()
// It converts a value into a decimal number. Also if there is zero in the last it will remove it.
let price4 = "54.890"
console.log(parseFloat(price4))


// Method 7: isNaN()
// It checks whether a value is Not a Number even in the string .
let word = "hello"
console.log(isNaN(word))


// Method 8: isFinite()
// It checks whether a number is a real finite number.
console.log(isFinite(500)) // true
console.log(isFinite(Infinity)) //false
console.log(isFinite(NaN)) //false because NaN is not a number


// Method 9: Math.round()
// It rounds a number to the nearest whole number.
let num3 = 4.6
console.log(Math.round(num3))


// Method 10: Math.floor()
// It always rounds a number down to the nearest whole number, no matter how big the decimal part is.
let num4 = 7.9
console.log(Math.floor(num4))

//  Task Completed!