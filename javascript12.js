// 1- Arithematic Operators

// 1. Total price of items in cart
let item1 = 400;
let item2 = 600;
let item3 = 300;
let totalPrice = item1 + item2 + item3 ;
console.log("Total price of items is" , totalPrice);

// 2. Price after 10% discount
let price = 5000;
let discount = 0.10;
let finalPrice = price - (price * discount);
console.log("price after discount is " , finalPrice);

// 3. Total bill including 18% tax
let bill = 1500;
let tax = 0.18;
let totalBill = bill + (bill * tax);
console.log("total bill is " , totalBill);

// 4. BMI Calculator (Body Mass Index)
let weight = 70;
let height = 1.75;
let bmi = weight / (height * height);
console.log(bmi);

// 5. Monthly salary after tax
let salary = 50000;
let taxRate = 0.10;
let monthlySalary = salary - (salary  * tax);
console.log("salary after tax" , monthlySalary);

// 6. Average rating from 5 users
let rating1 = 4;
let rating2 = 5;
let rating3 = 3;
let rating4 = 4;
let rating5 = 5;
let averageRating = (rating1 + rating2 + rating3 + rating4 + rating5) / 5;
console.log("average rating is " , averageRating);

// 7. Delivery charge calculator
let orderAmount = 800
// let deliveryCharge = orderAmount > 1000 ? 0 : 50;
let delivery;
if(orderAmount >= 1000){
    delivery = 0;
}
else{
    delivery = 100;
}
console.log("delivery charge is " , delivery);

// 8. Simple Interest Calculator
let principal = 10000;
let rate = 5;
let time = 2;

let interest = (principal * rate * time) / 100;

console.log(interest);

//9. Remaining balance after withdrawal
let balance = 2000;
let withdraw = 500;
let remaining = balance - withdraw ;
console.log("remaining balance is ", remaining);

// 10. Convert Minutes to Hours and Minutes
let minutes = 130;

let hours = Math.floor(minutes / 60);
let remainingMinutes = minutes % 60;

console.log(hours, "hours", remainingMinutes, "minutes");


// 3- if , else , if else if (Desion Making)


//1. Login System

let username = prompt("Enter username:");
let password = prompt("Enter password:");

if (username === "admin" && password === "1234") {
    console.log("Login successful!");
}
 else {
    console.log("Wrong username or password.");
}

// 2. Age Restriction Check

let age = prompt("Enter your age:");
age = Number(age);
if (age < 18) {
    console.log("Access denied. You are under 18.");
}
 else {
    console.log("Access allowed.");
}

//3. Online Store Discount System

let orderamount = prompt("Enter order amount:");
orderamount = Number(orderamount);
if (orderamount > 200) {
    console.log("You get 20% discount!");
}
 else if (orderamount  > 100) {
    console.log("You get 10% discount!");
} 
else {
    console.log("No discount available.");
}

//4. Student Grade Checker

let marks = prompt("Enter your marks percentage:");
marks = Number(marks);
if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else if (marks >= 40) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// 5. Weather Advisory System

let weather = prompt("Enter weather (hot, cold, rainy):");
if (weather === "hot") {
    console.log("Drink water and stay cool.");
} else if (weather === "cold") {
    console.log("Wear warm clothes.");
} else if (weather === "rainy") {
    console.log("Take an umbrella.");
} else {
    console.log("Weather not recognized.");
}