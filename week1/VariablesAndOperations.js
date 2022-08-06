//create a variable to hold the quantity of available plane seats left on a flight
let availableTickets = 5;
		
//create a variable to hold the cost of groceries at checkout
//let grocerieTotal = 32.23; this one is broken!!!
let grocerieTotal = 32.28;
//create a variable to hold a person's middle initial
let middleInitial = "D";

//create a variable to hold true if it's hot outside and false if it's cold outside
let isItHot = true;
//create a variable to hold a customer's first name
let customerFirstName = "Bobby";

//create a variable to hold a street address
let streetAddress = "5050 spicelumber way";

//print all variables to the console

console.log(availableTickets);
console.log(grocerieTotal);
console.log(middleInitial);
console.log(isItHot);
console.log(streetAddress);


//a customer booked 2 plane seats, remove 2 seats from the available seats variable
availableTickets = availableTickets -2;
console.log(availableTickets);


//impulse candy bar purchase, add 2.15 to the grocery total
//costOfGroceries = costOfGroceries + 2.15;
//let purchase = 2.15;
grocerieTotal = grocerieTotal + 2.15;
console.log(grocerieTotal);

//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = "M";
console.log(middleInitial);

//the season has changed, update the hot outside variable to be opposite of what it was
isItHot = !isItHot;
console.log(isItHot);

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
let customerFullName = customerFirstName + " " + middleInitial + " " + "Lastnameson";

//print a line to the console that introduces the customer and says they live at the address variable

console.log(customerFullName + " lives at " + streetAddress);