// Task 1 - Function Declaration
function calculateSalary(baseSalary, bonus, taxRate) {  // make a function  to calculate salaru
    const netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    console.log("Net Salary: $" + netSalary);
}
calculateSalary(5000, 500, 0.1);  // Output: Net Salary: $5000.00
calculateSalary(7000, 1000, 0.15); // Output: Net Salary: $6950.00


// Task 2 - Function Expression
const calculateDiscount = function(price, discountRate) {     // make a function that will see the whole total 
    const finalPrice = price - (price * discountRate);
    console.log("Final Price: $", finalPrice);
};
calculateDiscount(100, 0.2);  // Expected output: "Final Price: $80.00"
calculateDiscount(250, 0.15); // Expected output: "Final Price: $212.50"


// Task 3 - Arrow Function
const calculateServiceFee = (amount, serviceType) => { // make a constant function that will make you see difference between all the memembershiops
    let fee = 0;
    if (serviceType = "Premium") {
        fee = amount * 0.15;
    } else if (serviceType = "Standard") {
        fee = amount * 0.10;
    } else if (serviceType = "Basic") {
        fee = amount * 0.05;
    }
    console.log("Service Fee: $", fee);
};
calculateServiceFee(200, "Premium") // Expected output: "Service Fee: $30.00"
calculateServiceFee(500, "Standard") // Expected output: "Service Fee: $50.00"

//Task 4-Parameters and Arguments 
function calculateRentalCost(days, carType, insurance = false) {  // make a function that will come off true if ther car is economy 
    const rates = {
        "Economy": 40,
        "Standard": 60,
        "Luxury": 100
    };
    let dailyRate = rates[carType];
    let baseCost = dailyRate * days;
    let insuranceCost = insurance ? 20 * days : 0;
    let totalCost = baseCost + insuranceCost;
    return `Total Rental Cost: $${totalCost}`;
}
console.log(calculateRentalCost(3, "Economy", true)); // Output: "Total Rental Cost: $180"
console.log(calculateRentalCost(5, "Luxury", false)); // Output: "Total Rental Cost: $500"


// Task 5- Returning Values
function calculateLoanPayment(principal, rate, time) { // make a function will make calculate loan payj=ment 
    let interest = principal * rate * time;
    let totalPayment = principal + interest;
    return `Total Payment: $${totalPayment.toFixed(2)}`;
}
console.log(calculateLoanPayment(1000, 0.05, 2)); // Output: "Total Payment: $1100.00"
console.log(calculateLoanPayment(5000, 0.07, 3)); // Output: "Total Payment: $6050.00"


// Task 6-  HIgher-Order Function
let transactions = [200, 1500, 3200, 800, 2500]; // make array of diffferent trabscations
function filterLargeTransactions(transactions, filterFunction) {;
    return transactions.filter(filterFunction);
}
console.log(filterLargeTransactions(transactions, amount => amount > 1000)); 


// Task 7- Closures
function createCartTracker() {
    let total = 0;           // make a cart tracker
    return function(amount) {
        total += amount;
        return total;
    };
}
let cart = createCartTracker();
console.log(cart(20));
console.log(cart(35));

//Task 8 - Recursion
function calculateSavings(years, amount) {  //recursion that will make years and return the amount 
    if (years === 0) {
        return amount;
    }
    return calculateSavings(years - 1, amount * 1.05);
}
console.log(calculateSavings(8, 1000).toFixed(2)); // 1102.50
console.log(calculateSavings(5, 5000).toFixed(2)); // 6381.41
