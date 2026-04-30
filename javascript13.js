// 1. grocery Bill Calculator:

// function calculateBill (prices){
// let total = 0
// for(i=0; i<prices.length; i++){
// total += prices[i]
// }
// return total
// }


// let numItems = parseInt(prompt("Enter number of items:"))

// let prices =[]
// for(i=0; i<numItems; i++){
//     let price = parseFloat(prompt("Enter the prices of items:" + (i+1) + ":"))
//     prices.push(price)
// }

// Calculate total bill 
// let totalBill = calculateBill(prices)

// if(totalBill >5000){
//     let discount = totalBill*0.10
//     totalBill = totalBill-discount
//     alert("10% discount applied!")
// }

// alert("Final Bill: " + totalBill)

// ----------

//2.student result system

// function calculateGrade(average){
//     if(average >= 80){
//         return "A";
//     }
//      else if(average > 60){
//         return "B";
//     }
//       else if(average > 40){
//         return "B";
//     }  
//     else {
//         return "C";
//     }
// }

// let name = prompt ("Enter the student name: ")

 
// let total=0
// for(i=0; i<5;i++){
// let marks = parseFloat(prompt("Enter the marks of 5 subjects:" + (i+1) +":"))
// total += marks
// }

// let average = total / 5

// let grade = calculateGrade(average)

// alert("Student Name: " + name + "\nTotal: " + total + "\nAverage Marks: " + average + "\nGrade: " + grade)

// ----------------

// 3. ATM Withdrawal System
//  let balance = 10000;

// function withdrawMoney(amount) {
//     if (amount > balance) {
//         console.log("Insufficient balance");
//     } 
//     else {
//         balance -= amount;
//         console.log("Withdrawal Successful");
//         console.log("Remaining Balance: " + balance);
//     }
// }

// for (let i = 1; i <= 3; i++) {
//     let amount = parseFloat(prompt("Attempt " + i + ": Enter amount to withdraw"));

//     withdrawMoney(amount);
// }

//--------------------

// 4. Restaurant Order System
// let burger = 500;
// let pizza = 1200;
// let drink = 200;

// let item = prompt("Enter item (burger/pizza/drink):").toLowerCase();
// let quantity = parseInt(prompt("Enter quantity:"));

// function calculateOrder(item, quantity) {
//     let price = 0;

//     if (item === "burger") {
//         price = burger;
//     } 
//     else if (item === "pizza") {
//         price = pizza;
//     } 
//     else if (item === "drink") {
//         price = drink;
//     } 
//     else {
//         alert("Invalid item");
//         return;
//     }

//     let bill = price * quantity;

//     if (bill > 2000) {
//         bill = bill - (bill * 0.15);
//     }

//     alert("Final Bill = " + bill);
// }

// calculateOrder(item, quantity);


//--------------------

// 5. Employee Salary Calculator
let rate = 500;

function calculateSalary(name, hours) {
    let salary = 0;

    if (hours > 40) {
        let normalPay = 40 * rate;
        let overtime = (hours - 40) * (rate * 1.5);
        salary = normalPay + overtime;
    } 
    else {
        salary = hours * rate;
    }

    alert(name + "'s Salary = " + salary);
}

for (let i = 1; i <= 3; i++) {
    let name = prompt("Enter employee name:");
    let hours = parseInt(prompt("Enter hours worked:"));

    calculateSalary(name, hours);
}