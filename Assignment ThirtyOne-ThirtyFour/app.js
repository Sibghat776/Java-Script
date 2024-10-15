// Date Methods

// // Task # 01
// document.write(`Current Date and Time : ${new Date()}`);




// // Task # 02
// const months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];

// const currentMonth = new Date().getMonth();
// alert("The current month is: " + months[currentMonth]);





// // Task # 03
// let days = [`Sun` , `Mon` , `Tue` , `Wed` , `Thurs` , `Fri` , `Sat` , `Sun`]; 

// let currentDay = new Date().getDay();
// alert(`Today is : ${days[currentDay]}`);






// // Task # 04
// let days = new Date().getDay();

// if (days == 0 || days == 6) {   
//     alert("It's Fun day");
// } else {
//     alert("It's Week day");
// }





// // Task # 05
// let month = new Date().getMonth();
// if (month <= 15) {
//     alert(`First Fifteen days of the month`);
// } else if (month >= 16) {
//     alert(`Last Fifteen days of the month`);
// }







// // Task # 06
// document.write(`Current date : ${new Date() + "</br>"}`);
// document.write(`Elapsed MiliSeconds Sice January 1, 1970 :::: ${new Date().getTime() + "</br>"}`);
// document.write(`Elapsed Minutes Since January 1, 1970 :::: ${Math.floor(new Date().getTime() / 60000)}`);






// // Task # 07
// var time = new Date().getHours();
// if (time <= 12) {
//     document.write(`It's AM`);
// } else {
//     document.write(`It's PM`);
// }





// // Task # 08
// var laterDate = new Date(`december 31, 2020`);
// document.write(`Later Date : ${laterDate}`);





// // Task # 09
// let june15Ramzan = new Date("june 18, 2015").getTime();
// alert(Math.round(june15Ramzan / (1000 * 60 * 60 * 24)));




// // Task # 10
// var startingOf2015 = new Date("january 1, 2015");
// document.write(`On Reference Date : ${startingOf2015 + "<br>"}`);
// document.write(`${startingOf2015.getTime() / 1000} : Seconds has passed since January 1, 2015`);





// // Task # 11
// var currentDate = new Date();
// document.write(`Current Date and Time : ${currentDate + "<br>"}`);
// currentDate.setHours(currentDate.getHours() - 1);
// document.write("Aaj ki date aur ek ghanta peeche:", currentDate);





// // Task # 12
// var currentDate = new Date();
// document.write(`Current Date and Time : ${currentDate + "<br>"}`);
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// document.write("100 Years Back : ", currentDate);





// // Task # 13
// let userAge = +prompt("Enter your age?");
// document.write(`User Age : ${userAge + "<br>"}`);
// document.write(`User Birth year : ${new Date().getFullYear() - userAge}`);







// // Task # 14
// const months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];
// var chargesPerUnit = 16;
// var numberOfUnits = +prompt("Enter the units");
// var amountInDueDate = numberOfUnits * chargesPerUnit;

// var userName = prompt("Enter your Name");
// document.write(`<h1>K-Electric Bill</h1> </br>`);
// document.write(`Customer Name : ${userName + "<br>"}`);
// document.write(`Month : ${months[new Date().getMonth()] + "<br>"}`);
// document.write(`Number of Units : ${numberOfUnits + "<br>"}`);
// document.write(`Charges per Unit : ${chargesPerUnit + "<br>"}`);
// document.write("<br>");
// document.write(`Net Amount Payable (With in due Date) : ${amountInDueDate + "<br>"}`);
// document.write(`Late Payment Surcharge : ${350 + "<br>"}`);
// document.write(`Gross Amount payable (After Due Date) : ${amountInDueDate + 350 + "<br>"}`);