// Strings Method

// // Task # 01
// let firstName = prompt(`What is your first Name ???`);
// let lastName = prompt(`What is your Last Name ???`);

// let fullName = firstName + ` ` + lastName;
// alert(`Asslam u alaikum Sir ! ` + fullName);




// // Task # 02
// let userMobile = prompt(`What your Mobiles Name???`);
// document.write(`User's Mobile : ${userMobile} ;`);

// document.write(`${"</br>"} Length of Strings :  ${userMobile.length} ;`);




// // Task # 03
// document.write("Name of our country : ");
// var ourCountry = "Pakistan";
// var indexNo = `Index Number of "n" : ${ourCountry.indexOf("n")}`;
// document.write(ourCountry + "</br>");
// document.write(indexNo);




// // Task # 04
// document.write("Assalam u alaikum" + "</br>");
// var checkLastA = "Assalam u alaikum".lastIndexOf("a");
// document.write(`Index of last a : ${checkLastA}`);




// // Task # 05
// let ourCountry = "Pakistan </br> ";
// let indexNo03 = `Character at index no 04 is : ${ourCountry.charAt(4)}`;
// document.write(ourCountry);
// document.write(indexNo03);




// // Task # 06
// let fullName =  `Sibghat Ullah`;
// alert(`Asslam u alaikum Sir ! ` + fullName);




// // Task # 07
// document.write(`City : `);
// let Hyderabad = (`Hyderabad`);
// document.write(Hyderabad);
// document.write(`</br>`);
// var Islamabad = Hyderabad.replace("Hyder", "Islam");
// document.write(`</br>`);
// document.write(`After Replacement : ${Islamabad}`);




// // Task # 08
// var message = "Ali and sami are best friends. They play Cricket and football together.";
// document.write(message);
// document.write("</br>" + message.replaceAll("and", ","));




// // Task # 09
// var value1 = `472`;
// document.write(`Value : ${value1}`);
// document.write(`</br>Type : String`);
// document.write(`</br>Value : ${Number(value1)}`);
// document.write(`</br>Type : Number`);




// // Task # 10 
// let userInput = prompt("Kuch bhi Likh Do bhai");
// document.write(`User Input : ${userInput} ${"</br>"}`);
// document.write(`In UpperCase : ${userInput.toUpperCase()}`);





// // Task # 11
// let userInput = prompt("Kuch bhi Likh Do bhai");
// document.write(`random text that Takes from user : ${userInput}${"</br>"}`);
// let titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1);
// document.write(`In title Case : ${titleCase}`);




// // Task # 12
// let num = 67.65
// document.write(`Number :  ${num}${"</br>"}`)
// document.write(`String : ${num.toString().replaceAll(".", "")}`)





// // Task # 13
// let userName = prompt("Enter your username:");
// let sanitizedUserName = userName.replace(/[@.,!]/g, "");

// if (sanitizedUserName.length !== userName.length) {
//     alert("Invalid username! Please do not use special symbols like @, ., , or !");
// } else {
//     document.write("Welcome, " + userName + "!");
// }





// // Task # 14
// let bakeryItems = ["cake" , "apple pie" , "cookies" , "chips" , "patties"];
// let userInput = prompt("Bhai sab aapko hamare bakery se kia chahiye??").toLowerCase();
// let found = false;

// for (i = 0; i < bakeryItems.length; i++) {
//     if (bakeryItems[i].toLowerCase() == userInput.toLowerCase()) {
//         document.write(`Apka Order ${userInput} counter no ${[i]} per Avaiable ha`);
//         found = true;
//         break;
//     }
// }

// if (!found) {
//     document.write(`${userInput} is not Available at our bakery`)
// }





// // Task # 15
// let password = prompt("Enter your password:");

// let startsWithNumber = isNaN(password.charAt(0)); // Check if the first character is a number
// let containsOnlyAlphabetsAndNumbers = /^[a-zA-Z0-9]+$/.test(password); // Regular expression to check only alphabets and numbers
// let passwordLength = password.length() = 7

// if (startsWithNumber && containsOnlyAlphabetsAndNumbers && passwordLength) {
//     document.write("Invalid password! It should start with a number and contain only alphabets and numbers.");
// } else {
//     document.write("Password is valid.");
// }





// // Task # 16 
// let university = "U n i v e r s i t y  o f  K a r a c h i"
// let separate = university.split(" ");

// for (i = 0; i < separate.length; i++) {
//     document.write(separate[i] + "</br>");
// }





// // Task # 17
// let userInput = prompt("Enter your Name OR Your city Name OR Your Father Name And I wil Display the last word of your Input");
// document.write(`User Input : ${userInput + "</br>"}`);
// document.write(`Last word of Input : ${userInput.charAt(userInput.length - 1)}`);





// // Task # 18
// let sentence = "The quick brown fox jumps over the lazy dog. The The the the the the the".toLowerCase();
// let wordFind = sentence.split("the").length - 1;

// document.write(`The Word ${"'the'"} appears ${wordFind} times.`);















