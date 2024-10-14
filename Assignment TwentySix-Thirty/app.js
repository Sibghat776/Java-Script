// Math Methods



// // Task # 1
// let userNumber = +prompt("Write a Positive integer");
// document.write(`Number : ${userNumber + "</br>"}`)
// document.write(`Round off : ${Math.round(userNumber) + "</br>"}`)
// document.write(`Floor Value : ${Math.floor(userNumber) + "</br>"}`)
// document.write(`Ceil Value : ${Math.ceil(userNumber)}`)





// // Task # 2
// let userNumber = parseFloat(prompt("Enter a Number in negative floating point"));
// document.write(`Number : ${userNumber + "</br>"}`);
// document.write(`Round Off : ${Math.round(userNumber) + "</br>"}`);
// document.write(`Floor Value : ${Math.floor(userNumber) + "</br>"}`);
// document.write(`Ceil Value : ${Math.ceil(userNumber)}`);





// // Task # 03
// let userNumber = +prompt("Enter a number and i will absolute it...");
// document.write(`Number : ${userNumber + "</br>"}`);
// document.write(`Absolute Number : ${Math.abs(userNumber)}`);






// // Task # 04 
// document.write(`Random Number of dice show when you Refresh :  ${parseInt((Math.random() * 5) + 1)}`)






// // Task # 05
// let randomNumber = parseInt((Math.random() * 2) + 1);
// document.write(`Number :  ${randomNumber + "</br>"}`);

// if (randomNumber == 1) {
//     document.write(`Random Coin Value : Tails </br>`);
// } else if (randomNumber == 2) {
//     document.write(`Random Coin Value : Heads`);
// }






// // Task # 06
// var RandomNumber = parseInt((Math.random() * 100) + 1);
// document.write(`Random Number Between 1 to 100 : ${RandomNumber}`);






// // Task # 07
// let userInput = prompt("Enter your weight in Kilograms");
// document.write(`User weight : ${userInput}`);






// Task # 08
var RandomNumber = parseInt((Math.random() * 10) + 1);
var userInput = +prompt("Enter a Number between 1 to 10")
document.write(`Secret Number is : ${RandomNumber}`)
if (userInput == RandomNumber) {
    alert("Congrates your Number is match to the secret number")
} else {
    alert("sorry your input don't match the secret number")
}












