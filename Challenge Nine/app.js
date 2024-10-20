let students = [
    {id: 1, name: "Shayan", score: 80, favoriteSubject: "Math"},
    {id: 2, name: "Sami", score: 65, favoriteSubject: "English"},
    {id: 3, name: "Sibghat", score: 92, favoriteSubject: "Islamiat"},
    {id: 4, name: "Safi", score: 75, favoriteSubject: "Urdu"},
    {id: 5, name: "Shahzaib", score: 95, favoriteSubject: "Sindhi"}
]

let updatedStudents = students.map(function (std) {
    return {
        ...std,
        
    }
})