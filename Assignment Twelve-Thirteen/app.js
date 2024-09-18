// If...Else / Else if Statements
// Testing set of conditions

// // Task # 01
// // Take input from user using prompt
// let inputChar = prompt("Enter a character:");

// // Get the ASCII code of the character
// let asciiCode = inputChar.charCodeAt(0);

// // Check if it's a number (0-9)
// if (asciiCode >= 48 && asciiCode <= 57) {
//     console.log(inputChar + " is a number.");
// }
// // Check if it's an uppercase letter (A-Z)
// else if (asciiCode >= 65 && asciiCode <= 90) {
//     console.log(inputChar + " is an uppercase letter.");
// }
// // Check if it's a lowercase letter (a-z)
// else if (asciiCode >= 97 && asciiCode <= 122) {
//     console.log(inputChar + " is a lowercase letter.");
// }
// // If it's neither, handle it as another character
// else {
//     console.log(inputChar + " is not a number or letter.");
// }


// // Task # 02
// var integer1 = prompt("Enter the Number you want")
// var integer2 = prompt("Enter the Number you want")

// if (integer1 > integer2) {
//     alert("First integer is bigger than Second integer")
// } else if (integer1 < integer2) {
//     alert("First integer is smaller than Second integer")
// } else if (integer1 == integer2) {
//     alert("Both integers are equal ....")  
// }


// // Task # 03
// var userInputNumber = +prompt("Enter a random number with any operator you want...")

// if (userInputNumber > 0) {
//     alert("The Number is Positive")
// }
// else if (userInputNumber < 0) {
//     alert("This Number is Negative")
// }
// else if (userInputNumber === 0) {
//     alert("The Number is Zero...")
// }

// // Task 04
// var vowels = prompt("Enter A Vowel Word")
// if (vowels === "A" ||vowels === "E" ||vowels === "I" ||vowels === "O" ||vowels === "U") {
//     alert("True")
// } else {
//     alert("false")
// }


// // Task 05
// var password = prompt("Enter first password")
// if (password === "") {
//     alert("Please Enter your Password")
// } 
// var confirmPassword = prompt("Enter Confirm password")
// if (confirmPassword === password) {
//     alert("Correct! The password you entered matches the original password...")
// } else {
//     alert("Incorrect Password !!!")
// }

// // Task 06
// var greeting;
// var hour = prompt("What hour is you are in");

// if (hour < 18) {
//     greeting = ("Good day");
// } else {
//     greeting = ("Good evening");
// }

// // Task 07
// var time = prompt("Enter the time in this format -->> 1900"),
// exactTime = 1900
// if (time >= 0 && time < 1200) {
//     alert("Good Morning")
// } else if (time >= 1200 && time < 1200) {
//     alert("Good Afternoon")
// } else if (time >= 1700 && time < 2100) {
//     alert("Good Evening")
// } else if (time >= 2100 && time < 2360) {
//     alert("Good Night")
// }

