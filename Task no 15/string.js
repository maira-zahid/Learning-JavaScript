//String Methods

//1. Method Name: toUpperCase()
//Description: This method converts a string to uppercase letters.
let day = "Monday"
let dayResult = day.toUpperCase()
console.log(dayResult)


//2. Method Name: toLowerCase()
//Description: This method converts a string to lower case letters.
let email = "ABC@GMAIL.COM"
let emailResult = email.toLowerCase()
console.log(emailResult)


//3. Method Name: trim()
//Description: This method removes whitespace from both ends of a string. Space between words stays
let city = "          Faisalabad        "
let cityResult = city.trim()
console.log(cityResult)
// AND also useful for checking the empty inputs 
let input = "        "
if(input.trim() === ""){
    console.log("Empty Input")
} 
else {        
    console.log("Not Empty Input")
}


// 4. Method Name: slice()
//Description: slice() is used to cut out a part of a string and return it as a new string.You choose the starting position and ending position.It does not change the original string.
//  =>  string.slice(start, end)
let country = "Pakistan"
let countryResult = country.slice(0, 4)
console.log(countryResult)
// If you write only one parameter the slice() will make a new string of elements from that index to the last
let place = "Murree"
let placeResult = place.slice(2)
console.log(placeResult)


//5. Method Name: substring()
//Description: substring() is used to take a part of a string between two positions.It works very similar to slice(), but with some different rules.
// substring() does not treat negative numbers as 0. Because substring(4, 1) swaps values automatically: substring(1,4) BUT slice9(4, 1) returns an empty string.
let subWord = "Hello".substring(4,1)
console.log(subWord);


// 6. Method Name: replace()
//Description: replace() is used to change a part of a string with something else.
//string.replace(oldValue, newValue)
let text = "I like Javascript"
let newText = text.replace("Javascript", "Python")
console.log(newText)
// If you want to replace all occurrences of a word, you can use replaceAll() method:
let text2 = "I like Javascript. Javascript is great!"
let newText2 = text2.replaceAll("Javascript", "Python")
console.log(newText2)
// global flag : if you want to change all same values
let text3 = "cat cat cat";
// text.replace("cat", "dog");❌WRONG
text3.replace(/cat/g, "dog");


//7.includes() 
//Description: includes() checks if a string contains a specific word or character. It returns result as true or false.
let sentence = "I am learning Javascript"
let resultSentence = sentence.includes("Java")
console.log(resultSentence)


//8.indexOf() 
//Description: indexOf() is used to find the position (index) of a word or character inside a string
let word = "Hello World!"
let resultWord = word.indexOf("World")
console.log(resultWord)


//9.split()
//Description: split() is used to break a string into parts and store them in an array. It splits the string based on a separator (like space, comma, etc.)
let fruits = "apple,banana,mango,orange"
let fruitsResult = fruits.split(",")
console.log(fruitsResult)


//10.concat()
//Description: concat() is used to join two or more strings together. It does not change the original strings but returns a new string.
//string1.concat(string2, string3, ...)
let firstName = "John"
let lastName = "Doe"
let fullName = firstName.concat(" ", lastName)
console.log(fullName)

//----------------------
