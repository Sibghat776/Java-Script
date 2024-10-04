//Function Challenge
function fullName(firstName, lastName) {
    return firstName + lastName;
}

let result = fullName("Sibghat ", "Ullah").toUpperCase()
console.log(result)


// Refactor in Object Parameters
console.log(fullName({firstName : "Sibghat ", lastName : "Ullah"}))