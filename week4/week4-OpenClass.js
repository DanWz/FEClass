/*
// Convert the following function into an arrow function. Refer to the new function as 
// returnSquareRoot.

// function myFunction(num) { return Math.sqrt(num); }

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var a = parseInt(input[0]);


//write your code here 
// const createFullName = (firstName, lastName) => `${firstName} ${lastName}`;
//const returnSquareRoot = (num) => `${Math.sqrt(num)}`; OR
const returnSquareRoot = (num) => Math.sqrt(num);









//do not change
//for testing purposes
console.log(returnSquareRoot(a));


// Convert the following function into an arrow function. Refer to the new function as revert.

// function myFunction(value){ return !value; }

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var a = parseInt(input[0]);

//write your code here
const revert = (booEntry) => !booEntry;




//do not change
console.log(revert(a))


// Convert the following function into an arrow function. Refer to the new function as monthlyPayment.
var a = 40;
// function yearlyPayment (yearlyPayment) {
//     let monthly = yearlyPayment / 12;
//     return monthly.toFixed(2);
// }

// const monthlyPayment = (yearlyPayment) => {
//     let monthly = yearlyPayment / 12;
//     return monthly.toFixed(2);
// };

const monthlyPayment = (yearlyPayment) => (yearlyPayment / 12).toFixed(2);



//console.log(yearlyPayment(40));
console.log(monthlyPayment(a));


// Convert the following function into an arrow function. Refer to the new function as pythagoras.

// function myFunction(num1, num2) { return Math.sqrt((num1*num2)+(num2*num2)); }


var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var a = parseInt(input[0]);
var b = parseInt(input[1]);


//write your code here
// const pythagoras = (num1, num2) => Math.sqrt((num1*num2)+(num2*num2)); //incorrect
//actual formula should be a^2 + b^2 = c^2
const pythagoras = (num1, num2) => Math.sqrt((num1*num1)+(num2*num2)); //correct



//do not change
//for testing purposes
console.log(pythagoras(a,b));


// Convert the following function into an arrow function. Refer to the new function as fancyAlgorithm.
function myFunction(num1, num2, num3) {
    let value = 0;
    for(let i = 0; i < num3; i++){
        value = (value + num2) * num1;
    }
    return value / (num1 * (num3 * 10));
};

const fancyAlgorithm = (num1, num2, num3) => {
    let value = 0;
    for(let i = 0; i < num3; i++){
        value = (value + num2) * num1;
    }
    return value / (num1 * (num3 * 10)); 
};


let a = 10;
let b = 2;
let c = 3;
console.log(myFunction(a,b,c));
console.log(fancyAlgorithm(a,b,c));

// Convert the following function into an arrow function. 
// Refer to the new function as returnNumber.
function myFunction(num) {
    return `Your number is $(num)`;
};

const returnNumber = (num) => `Your number is ${num}`;

console.log(returnNumber(a));



const createFullName = (firstName, lastName) =>  `${firstName} ${lastName}`;

const doubleNumber = (number) => `${number * 2}`;

const getEvenNumbers = (array) => {
    let evenNumbers = [];
    for (let i of array) {
        if (i % 2 === 0){
            evenNumbers.push(i);
        }
    }
    return evenNumbers;
};

console.log(createFullName('josh', 'macsauce'));
console.log(doubleNumber(50));
let myArray = [1,2,3,4,5,6,7,8,9,10];
console.log(getEvenNumbers(myArray));
*/


// The product owner on your development team believes they've seen a pattern as to which customers purchase the most socks. 
// To verify, you've been asked to write a function that processes an array of customer objects and return a new array that 
// contains only customers that match ANY of the following criteria:

// name starts with a 'C' (upper or lowercase)
// address contains no undefined fields
// the city is Peoria and the state is AZ
// membership level is GOLD or PLATINUM unless the customer is younger than 29, then SILVER is okay too

const customers = [
    { //add good name
        name: 'Cash',
        address: {
            street: undefined,
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'BRONZE',
        age: 32
    },
    { // add mem level + age
        name: 'Sara',
        address: {
            street: undefined,
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'SILVER',
        age: 28
    },
    { // add good address
        name: 'Gregg',
        address: {
            street: '1234 W Bell Rd',
            city: 'Phoenix',
            zip: 85308,
            state: 'AZ'
        },
        membershipLevel: 'BRONZE',
        age: 32
    },
    { // add good mem level
        name: 'GreggT',
        address: {
            street: '1234 W Bell Rd',
            city: undefined,
            zip: 85308,
            state: 'AZ'
        },
        membershipLevel: 'PLATINUM',
        age: 32
    },
    { // fail
        name: 'Roger',
        address: {
            street: '1234 W Bell Rd',
            city: undefined,
            zip: 85308,
            state: 'AZ'
        },
        membershipLevel: 'BRONZE',
        age: 32
    },
    { // add correct city state
        name: 'Erica',
        address: {
            street: undefined,
            city: 'Peoria',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'BRONZE',
        age: 32
    },
    { // fail 
        name: 'Vanessa',
        address: {
            street: undefined,
            city: 'Peoria',
            zip: '85308',
            state: 'ID'
        },
        membershipLevel: 'BRONZE',
        age: 32
    },
    { // tester
        name: 'Tester',
        address: {
            street: '1234 W Bell Rd',
            city: '1Peoria',
            zip: undefined,
            state: 'AZ'
        },
        membershipLevel: 'PLATINUM',
        age: 29
    },
    //more customers with the same schema
];



//let stockWhales = [];
//let customerPotential = [];

/////whoops this below is what to do if customer must match ALL criteria.
/*
for (element in customers) {
    console.log(element);
    if (customers[element].name.charAt(0) === 'c'|| customers[element].name.charAt(0) === 'C'){
        console.log(`well that worked. customer name ${customers[element].name} starts with upper or lower c`);

        let breakCondition = false;
        for (element1 in customers[element].address) {
            if (typeof customers[element].address[element1] === 'undefined'){
                breakCondition = !breakCondition
            };

    }
    console.log(breakCondition);
    if (breakCondition === false){
        if(customers[element].address.city === 'Peoria' && customers[element].address.state === 'AZ') {
            if (customers[element].membershipLevel === 'GOLD' || customers[element].membershipLevel === 'PLATINUM' || (customers[element].membershipLevel === 'SILVER' && customers[element].age < 29)){
                console.log(`We have a winner ${customers[element].name}`);
                stockWhales.push(customers[element]);
            }
        }
    }
        //console.log(typeof customers[element].address.street != 'undefined' && );
        // if (!customers[element].address.includes(undefined)) {
        //     console.log(`so far so good ${customers[element].name}`);
        // }
    } else {console.log('customer name does not start with c')}
}

console.log(stockWhales);
*/
function specialCriteriaArray (array){
    let newCustomers = [];
    for (element in array) {
        if (array[element].name.charAt(0) === 'c'|| array[element].name.charAt(0) === 'C') {
            newCustomers.push(array[element]); // names that start with 'c' added
        } else {
            let breakCondition = false; // loop to check for undefined address entried
            for (element1 in customers[element].address) {
                if (typeof customers[element].address[element1] === 'undefined'){
                    breakCondition = !breakCondition; 
                };
            };
            if (breakCondition === false){
                newCustomers.push(array[element]); // valid addresses added
            } else if(customers[element].address.city === 'Peoria' && customers[element].address.state === 'AZ') {
                newCustomers.push(array[element]); // correct city state combination added
            } else if (customers[element].membershipLevel === 'GOLD' || customers[element].membershipLevel === 'PLATINUM' || (customers[element].membershipLevel === 'SILVER' && customers[element].age < 29)) {
                newCustomers.push(array[element]); // correct membership level or level and age exception added.
            }

        } 
        
    }
    return newCustomers;
};

console.log(specialCriteriaArray(customers));