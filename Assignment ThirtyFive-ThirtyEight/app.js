// Functions 

// // Task # 01
// function currentDate() {
//     return new Date();
// }
// document.write(currentDate());




// // task # 02
// function greetUser() {
//     var userFirstName = prompt("Enter your first Name?");
//     var userLasttName = prompt("Enter your Last Name?");
//     var userFullName = userFirstName + " " + userLasttName;
//     document.write(`User FullName : ${userFullName}`);
// }
// greetUser();




// // Task # 03
// function addNumbers() {
//     var num1 = +prompt("Enter a number");
//     var num2 = +prompt("Enter a number that you want to add in first input");
//     var result = num1 + num2;
//     document.write(`The Input is : ${result}`)   
// }
// addNumbers();




// Task # 04
// function calculate(num1, num2, operator) {
//     let result;

//     if (operator === '+') {
//         result = num1 + num2;
//     } else if (operator === '-') {
//         result = num1 - num2;
//     } else if (operator === '*') {
//         result = num1 * num2;
//     } else if (operator === '/') {
//         result = num1 / num2;
//     } else {
//         result = 'Invalid operator';
//     }

//     document.write("The result is: " + result);
// }

// let num1 = parseFloat(prompt("Enter the first number:"));
// let num2 = parseFloat(prompt("Enter the second number:"));
// let operator = prompt("Enter the operator (+, -, *, /):");

// calculate(num1, num2, operator);





// Task # 05
// let userInput = +prompt("Enter a number and i will square it.")
// function square(userNumber) {
//     return userNumber*userNumber;
// };

// document.write(`Square of user Input : ${square(userInput)}`);





// // Task # 06
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1; // Base case: 0! = 1! = 1
//     }
//     return n * factorial(n - 1); // Recursive case
// }

// // Example usage
// let num = parseInt(prompt("Enter a number:"));
// let result = factorial(num);
// document.write("The factorial of " + num + " is: " + result);





// // Task # 07
// function displayNumbersBetween(firstNumber, lastNumber) {
//     if (firstNumber < lastNumber) {
//         document.write("Numbers between " + firstNumber + " and " + lastNumber + ":<br>");
//         for (let i = firstNumber + 1; i < lastNumber; i++) {
//             document.write(i + "<br>");
//         }
//     } else {
//         document.write("The first number should be smaller than the last number.");
//     }
// }

// let firstNumber = parseInt(prompt("Enter the first number:"));
// let lastNumber = parseInt(prompt("Enter the last number:"));

// displayNumbersBetween(firstNumber, lastNumber);






// // Task # 08
// function calculateHypotenuse(base, perpendicular) {
//     function square(number) {
//         return number * number;
//     }
    
//     let hypotenuseSquared = square(base) + square(perpendicular);
//     let hypotenuse = Math.sqrt(hypotenuseSquared);
    
//     return hypotenuse;
// }

// // Example usage:
// let base = +prompt("Enter a number");
// let perpendicular = +prompt("Enter Second number");
// let hypotenuse = calculateHypotenuse(base, perpendicular);
// document.write("The hypotenuse is: " + hypotenuse);





// // Task # 09
// function calculateArea(height, width){
//     return height * width
// }
// let height = 10;
// document.write(`The Area of a trianglr is : ${calculateArea(height, 20)}`);





// // Task # 10
// function isPalindrome(str) {
//     // Convert the string to lowercase and remove non-alphanumeric characters
//     let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     // Compare the cleaned string to its reverse
//     return cleanedStr === cleanedStr.split('').reverse().join('');
// }

// // Example usage:
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
// console.log(isPalindrome("hello")); // false







// // Task # 11
// function toTitleCase(str) {
//     // Convert the input to lowercase and split into words
//     let words = str.toLowerCase().split(' ');
//     let titleCasedStr = "";

//     for (let i = 0; i < words.length; i++) {
//         // Capitalize the first letter of each word and add it to the result string
//         titleCasedStr += words[i].charAt(0).toUpperCase() + words[i].slice(1);
//         if (i < words.length - 1) {
//             titleCasedStr += " "; // Add a space between words
//         }
//     }

//     return titleCasedStr;
// }

// // Get input from the user
// let userInput = prompt("Enter a string to convert to title case:");
// let titleCased = toTitleCase(userInput);

// // Display the result
// document.write("Title Case: " + titleCased);






// Task # 12
function findLongestWord(str) {
    // Split the string into an array of words
    let words = str.split(' ');
    let longestWord = "";

    // Loop through each word
    for (let i = 0; i < words.length; i++) {
        // If the current word is longer than the longestWord, update longestWord
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

// Example usage:
let userInput = prompt("Enter a sentence to find the longest word:");
let longestWord = findLongestWord(userInput);
document.write("Longest Word: " + longestWord);
















