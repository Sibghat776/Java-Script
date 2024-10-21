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
function calculate(num1, num2, operation) {
    let result;
    switch (re) {
        case "+":
            result = num1 + num2;
        case "-":
            result = num1 + num2;
        case "*":
            result = num1 + num2;
        case "/":
            result = num1 + num2;
            break;

        default: "Erroe ! please enter a valid operator";
            break;
    };
    return result;
};


let num1 = +prompt("Enter a Number");
let num2 = +prompt("Enter Second Number");
let operation = prompt("Enter Operation that you want to do with the Numbers");

calculate(num1, num2, operation);
document.write("Result: " + result)








