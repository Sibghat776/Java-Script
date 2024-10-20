let students = [
    {id: 1, name: "Shayan", score: 80, favoriteSubject: "Math"},
    {id: 2, name: "Sami", score: 65, favoriteSubject: "English"},
    {id: 3, name: "Sibghat", score: 92, favoriteSubject: "Islamiat"},
    {id: 4, name: "Safi", score: 75, favoriteSubject: "Urdu"},
    {id: 5, name: "Ghulam Mustafa", score: 95, favoriteSubject: "Sindhi"}
]

let updatedStudents = students.map(function (std) {
    return {
        ...std,
        role: `Student`
    }
});

console.log(updatedStudents);

let highScores = students.filter(function (std) {
    if (std.score >= 80) return std;
})

console.log(highScores);

let specificID = students.find(function (SpecificStd) {
    if (SpecificStd.id == 3) return true;
});

console.log(specificID);

//Reduce
let averageScore = students.reduce(function (total, std) {
    console.log(total, "==> Total");
    console.log(std, "==> std");
    return (total += std.score)
}, 0);
console.log(averageScore, "==> Average Score");

