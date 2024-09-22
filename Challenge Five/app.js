// Funtion Challenge
function calculateTotal(subTotal, tax) {
    return subTotal + tax - 10;
}

var order1 = calculateTotal(150, 20)
var order2 = calculateTotal(20, 70)
var order3 = calculateTotal(100, 60)

console.log(order1 + " ==>> Order1")
console.log(order2 + " ==>> Order2")
console.log(order3 + " ==>> Order3")

var totalOrders = order1 + order2 + order3
console.log(totalOrders)