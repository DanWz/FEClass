let array1 = [1, 5, 6, 9, 10, 14];

// print the 3rd element in array1
console.log(array1[2]);
let third = array1[2]
// print the last element in array1
console.log(array1[array1.length -1]);
// add 16 and 3 to array1
console.log(array1);
array1.push(16, 3);
console.log(array1);
// sort the array, then print the 3rd element again
// did it change?
console.log(array1.sort());
array1.sort();
console.log(array1[2]);
if (third === array1[2]) {
    console.log('No. The sort did not change the 3rd value in this array');
} else {
    console.log('Yes. The sort changed the 3rd value in this array');
}
console.log(array1[2]);

// create a variable called myTodoList that holds an empty array
let myTodoList = [];
// add three todo items to the array using a built-in array method
myTodoList.push('wash dishes', 'exercise', '10 minutes of "me" time');
console.log(myTodoList);
myTodoList.unshift('make dinner');
console.log(myTodoList);

// remove the second item in the array
//splice method:
myTodoList.splice(1, 1);
console.log(myTodoList);


// create another array, yourTodoList, and add two todo items
let yourTodoList = ['brush teeth', 'do homework'];

// create another array, ourTodoList
// combine myTodoList and yourTodoList into ourTodoList

//for loop method with push
let ourTodoList1 = [];
//myTodoList push loop
myTodoList.forEach(element => {
ourTodoList1.push(element)    ;
});
//yourTodoList push loop
yourTodoList.forEach(element => {
    ourTodoList1.push(element)    ;
    });


console.log(ourTodoList1);

//Concat() method

let ourTodoList = myTodoList.concat(yourTodoList)
console.log(ourTodoList);

// sort the following array from Z-A
console.log(ourTodoList.reverse(ourTodoList.sort()));
console.log(ourTodoList);



// create a function called reverse that takes in parameter
// this function will return the opposite of whatever is passed in
// if its a boolean, return the opposite
// if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// if its an array, return the reversed array with each element reversed
function reverse (value) {
    if (typeof value == "boolean") {
        return !value;
    }
    if (typeof value === "number") {
        return Number(value.toString().split("").reverse().join(""));
        //return value.toString().split("").reverse().join("");
    }
    if (typeof value === "string") {
        return value.split("").reverse().join("");
    }
    if (Array.isArray(value)) {
        return value.reverse();
    }
}



////automatic testing block
let bootest; // this is the value that will be passed into the reverse function.
let testResult; // this is the expected value after reverse function.
let testerCase = 1; // the value that will increment until all written tests are executed.
////full test run through loop.
do {
console.log('Executing testCase: ' + testerCase);
if (testerCase === 1) {
    bootest = true;
    testResult = false;
} else if (testerCase === 2){
    bootest = false;
    testResult = true;
} else if (testerCase === 3){
    bootest = 1234;
    testResult = 4321;
} else if (testerCase === 4){
    bootest = "1234";
    testResult = "4321";
} else if (testerCase === 5){
    bootest = ['1', '2', '3', '4'];
    testResult = ['4', '3', '2', '1'];
}
console.log('Value to enter the "reverse" function: ' + bootest);
console.log('Value expected after the function: ' + testResult);
console.log('Value returned from function: ' + reverse(bootest));
if(reverse(bootest) === testResult) {
    console.log('Test pass.');
} else {
    ////this path was created because two arrays cannot be compared with the == or === operators.
    //// this line rules out if it is not a number or string
    if (typeof reverse(bootest) === 'number' || typeof reverse(bootest) === 'string') {
        console.log('Test FAILED.');
    } else {
        let backward = reverse(bootest); // create a new array of the reversed array.
        let counter = 0;
        for (let i = 0; i < bootest.length; i++){
            if (backward[i] === testResult[i]){
                counter++;
            }
        }
        //// compares the loop count is correct which only succeeds in the event equality exists for each item in the two arrays.
        if (counter === testResult.length && testResult.length === backward.length && backward.length === bootest.length){ 
            console.log('Test pass.');
        } else {
            console.log('Test FAILED.');
        }
    }
    
}
testerCase++;
} while (testerCase <= 5);


////test block written to confirm issues comparing arrays
let testArray = ['1','2','3','4'];
let testArray2 = ['1','2','3','4'];
if (testArray === testArray2){
    console.log('yep they "===" eachother');
} else if (testArray == testArray2) {
    console.log('they "==" eachother');
} else {
    console.log('well this is unexpected. ' + testArray + ' doesn\'t "==" or "===" ' + testArray2);
    if (testArray[0] === testArray2[0]){
        console.log('ok values can be compared');
    }
}



// create a function called addingMachine that will add all passed numbers and return the total
// Note: you don't know how many numbers will be passed
function addingMachine (numbers){
    x = Number(numbers);
    console.log(x + " " + (typeof x));
    for (let i = 1; i < arguments.length; i++){
        x += Number(arguments[i]);
    }
    return x;
}

console.log(addingMachine(46, -10, 2));


// You just signed a contract as an estimator for a restoration company. 
// Your contract states that you take home 10% of the profits on the first $100,000
// 20% on the next $400,000
// 35% on the next $500,000
// 40% on all profits above $1,000,000
// create a function that will allow you to check how much of a bonus you make
// the function should take in two variables as arguments, grossInvoiced and profitMargin
function bracketSystem (grossInvoiced, profitMargin) {

}

