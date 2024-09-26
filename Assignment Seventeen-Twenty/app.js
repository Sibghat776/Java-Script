// // Arrays And Loop



// // Task 01
// let mutidimensionalArray = [[]]


// // Task 02
// let matrixNumber = [
//     [0, 1, 2, 3].join(" ") + "</br>",
//     [1, 0, 1, 2].join(" ")  + "</br>",
//     [2, 1, 0, 1].join(" ") 
// ]
// document.write(matrixNumber.join(" "))



// // Task 03
// for (i = 1; i <= 10; i++) {
//     console.log(i)
// }



// // Task 04
// var userTableInput = +prompt("Enter a Number to show its Multiplication table...")
// for (i = 1; i <= 10; i++) {
//     console.log(userTableInput*i)
// }

// var userTableInput = +prompt("Enter length Multiplication table...")
// for (i = 1; i <= userTableInput; i++) {
//     console.log(2*i)
// }



// // Task 05
// let fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"]
// for (i = 0; i < fruits.length; i++) {
//     console.log("Element at Index " + i + " is " + fruits[i])
// }




// // Task 06
// document.write("Counting : ")
// for (i = 0; i <= 15; i++) {
//     document.write(i + "</br>")
// }

// document.write("</br>")

// document.write("Reverse Counting : ")
// for (i = 15; i >= 0; i--) {
//     document.write(i + "</br>");
// }

// document.write("</br>")

// document.write("Even Numbers : ")
// for (i = 2; i <= 20; i += 2) {
//     document.write(i + "</br>")
// }

// document.write("</br>")

// document.write("Odd Numbers : ")
// for (i = 1; i <= 20; i += 2) {
//     document.write(i + "</br>")
// }

// document.write("</br>")

// document.write("Series : ")
// for (i = 2; i <= 20; i += 2) {
//     document.write(i + "k" + "</br>")
// }



// // Task 07
const A = ["cake", "apple pie", "cookie", "patties", "bread", "cake Rusk"];

const userInput = prompt("Enter the item you want to search:");

const searchTerm = userInput.toLowerCase();

let found = false;
let index = -1;

// Use a for loop to iterate over the array
for (let i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === searchTerm) {
        found = true;
        index = i; 
        break; 
    }
}

if (found) {
    alert(`${userInput} is found in the list at index ${index}.`);
} else {
    alert(`${userInput} is not found in the list.`);
}



// Task 08
var largeNumber = [24, 53, 78, 91, 12, 100]
document.write("Array Items : " + largeNumber.join(" "))
var num = largeNumber[0]
console.log(num)
document.write("</br>" + "The Largest Number is : ")
for (let i = 1; i < largeNumber.length; i++) {
    if (largeNumber[i] > num) {
        num = largeNumber[i]; // Update smallest if a smaller number is found
    }
}

document.write(num)














