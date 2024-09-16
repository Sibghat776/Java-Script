// User Input and Conditional Statement

// // Task # 01
// var userInputCity = prompt(`Enter the biggest city of Pakistan!`);
// if(userInputCity == `Karachi`){
//     alert(`Welcome to City of Lights✔`)
// }

// // Task # 02
// var userInputGender = prompt(`What is your Gender??`)
// if(userInputGender == `Male`){
//     alert(`Assalam u alaikum Bhai Jaan`)
// }else{
//     alert(`Assalam u alaikum Ma'am`)
// }

// // Task # 03
// var userInputSignal = prompt(`Which Signal is in your traffic road`)
// if(userInputSignal == `Red`){
//     alert(`Must Stop`)
// }if(userInputSignal == `Green`){
//     alert(`Move On`)
// }if(userInputSignal == `Yellow`){
//     alert(`Ready To Move`)
// }

// // Task # 04
// var userInputFuel = +prompt(`How much is the fuel for your car??`) 
// if(userInputFuel <= 0.25){
//     alert(`Please Refill the fuel in this Car`)
// }

// // Task # 05
// var a = 4;
// if(++a === 5){
//     alert(`given condition for variable a is true`);
// }
// console.log(a)

// // Task # 06 
// var b = 82;
// if(b++ === 83){
//     alert(`given condition for var b is true`)
// }
// console.log(b)

// var c = 12;
// if(c++ === 13){
//     alert(`Condition 1 is true`)
// }if(c === 13){
//     alert(`Condition 2 is true`)
// }if(++c < 14){
//     alert(`Condition 3 is true`)
// }if(c === 14){
//     alert(`Condition 4 is true`)
// }
// console.log(c)

// var materialCost = 350, labourCost = 150;
// var totalCost = materialCost + labourCost
// if(totalCost == labourCost + materialCost){
//     alert(`The Cost Equals`)
// }

// if(true){
//     alert(`True`);
// }

// if(`Car` < `Cat`){
//     alert(`Car is smaller than Cat`)
// }


// // Task # 06
// var totalMarksSubjects = (300)
// var userInputEng = +prompt(`Enter Your Obtained Marks in English Subject and Total marks are ${100}`)
// var userInputUrdu = +prompt(`Enter Your Obtained Marks in Urdu Subject and Total marks are ${100}`)
// var userInputMath = +prompt(`Enter Your Obtained Marks in Mathematics , and Total marks are ${100}`)
// var ObtainedMarks = (userInputEng + userInputUrdu + userInputMath)
// var percentage = (ObtainedMarks / totalMarksSubjects * 100)

// document.write(`<h1>Marks Sheet</h1> </br>`)
// document.write(`Total Marks : ` + totalMarksSubjects + `</br>`)
// document.write("Obtained Marks : " + ObtainedMarks + `</br>`)
// document.write("Percentage : " + percentage + "%" + `</br>`)

// if (percentage >= 80) {
//     document.write("Grade : A-One" + `</br>`)
//     document.write("Remarks : Excellent" + `</br>`)
// }
// if (percentage >= 70) {
//     document.write("Grade : A" + `</br>`)
//     document.write("Remarks : Good" + `</br>`)
// }
// if (percentage >= 60) {
//     document.write("Grade : B" + `</br>`)
//     document.write("Remarks : You Need to Improve" + `</br>`)
// }
// if (percentage <= 50) {
//     document.write("Grade : Fail" + `</br>`)
//     document.write("Remarks : Sorry" + `</br>`)
// }

// Task 07 Guess Game
// // a
// var randomNumber = 7;
// var guessNumber = prompt("Guess the Number Between 1 to 10")
// if(guessNumber == randomNumber){
//     alert(`"Bingo! Correct answer".`)
// }
// // b
// if(guessNumber == randomNumber + 1){
//     alert(`"Close Enough to the Corect answer".`)
// }

// Task 08
// var isDivisibleByThree = +prompt("Enter the number that you want to Divide by three (3)...")
// var ifDivided = isDivisibleByThree * 3
// console.log(ifDivided)
// if (ifDivided / 3) {
//     alert("This is the answer")
// } else {
//     alert("Error...")
// }

// // Task # 09
// var userInput = +prompt("Enter Random Number...")
// if (userInput % 2 == 0) {    // % -->> Modulus Divided userInput Number into 2 
//     document.write(userInput + " is Even Number")
// } else {
//     document.write(userInput + " is Odd Number")
// }


// // Task # 10
// var userInputTemperature = +prompt("cneti Grade kia chal raha ha ???")
// if (userInputTemperature >= 40) {
//     alert("It is too Hot Outside")
// } else if (userInputTemperature >= 30) {
//     alert("The Wether today is normal")
// } else if (userInputTemperature >= 20) {
//     alert("Today Wether is cool")
// } else if (userInputTemperature <= 10) {
//     alert("OMG ! Today Wether is so Cool")
// }


// // Task # 11
// var userCalculation = +prompt("Enter the Number that you want to plus in another number"),
//     userCalculation2 = +prompt("Enter the Number that you want to plus in first number")
// if (userCalculation + userCalculation2) {
//     document.write(userCalculation + userCalculation2)
// }

