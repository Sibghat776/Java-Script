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





// Task # 06
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






