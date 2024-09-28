var Car = {
    make : "Tesla",
    model : "Tesla model 3",
    year : "2015",
    colors : ["Black", "White", "Blue"],
    hybrid : true,
    drive () {
        console.log("Gaari chal pari")
    },
    stop () {
        console.log("Gaari ruk gayi")
    }
}

console.log(Car.make)
console.log(Car.colors[0])

Car.drive()
Car.stop()