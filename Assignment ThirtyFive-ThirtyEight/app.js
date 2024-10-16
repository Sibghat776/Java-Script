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
// Function to perform calculation
function calculate(num1, num2, operation) {
    let result;

    // Perform operation based on the provided operator
    if (operation === '+') {
        result = num1 + num2;
    } else if (operation === '-') {
        result = num1 - num2;
    } else if (operation === '*') {
        result = num1 * num2;
    } else if (operation === '/') {
        result = num2 !== 0 ? num1 / num2 : "Error: Cannot divide by zero";
    } else {
        result = "Error: Invalid operation";
    }

    // Return the result
    return result;
}

// Take input from the user
var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /):");

// Call the function and get the result
var result = calculate(num1, num2, operation);

// Display the result in the browser
document.write("Result: " + result);
 
