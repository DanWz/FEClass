/*
//////////////////////////////////////////////////////////////////FUNCTIONS//////////////////////////////////////////////////////////////////
// Create a function named checkout that accepts 2 variables named cardBalance and price. 
// If the price is more than the card balance, return false. Otherwise, return the new card balance.

//var fs = require("fs");
//var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
//var a = parseInt(input[0]);
//var b = parseInt(input[1]);
var a = 500;
var b = 100;


//write your code below
function checkout(cardBalance, price) {
    if (price > cardBalance){
        return false;
    } else {
        return cardBalance - price;
    }
}



//do not change below, used for testing purposes
console.log(checkout(a,b,40));


// Write a function called loopUntilX that takes one parameter. Within the function, write a loop that 
// loops as many times as the passed in value, starting at 0. Within the loop, print the number of 
// iterations to the console. Once the loop is done, return true.

// var fs = require("fs");
// var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
// var x = input[0];
var x = 5;

//write your code below
function loopUntilX(x){
    for(i=0; i < x; i++){
        console.log(i);
    }
    return true;
}



//do not change below, used for testing purposes
console.log(loopUntilX('string'));


// Write a function called sumOfTwo that takes two numbers as parameters and returns the sum.

// var fs = require("fs");
// var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
// var a = parseInt(input[0]);
// var b = parseInt(input[1]);
var a = 1
var b = 2


//write your code below
function sumOfTwo(num1, num2){
    return num1 + num2;
}



//do not change. Used for Testing purposes
console.log(sumOfTwo(a))


//////////////////////////////////////////////////////////////////ARRAYS//////////////////////////////////////////////////////////////////


// Given the array, studentList, remove the name "Eddie".

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");




let studentList = ["Allen", "Jessica", "Eddie", "Sarah"];
//write your code here
studentList.splice(2,1);



// do not change
// for testing purposes
function checkArray(array){
    return array.sort()
}

console.log(checkArray(studentList));


// Given the attendanceList array, replace the first element in the array with "Steven".

var fs = require("fs");
var attendanceList = [];

// This line will add the test cases to the array
attendanceList = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");


//write your code here
attendanceList[0] = "Steven";



// this will print the result
console.log(attendanceList);


// Write a function called printArray that accepts an array as an argument. Create a loop that will print each value of the passed in array.
// var fs = require("fs");
// var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var input = [1,2,3,4];

//write your code here
function printArray(x){
    for (i=0;i<x.length;i++){
        console.log(x[i]);
    }
}



// do not change
// for testing purposes
printArray(input);

*/
// Write a function called sortArray that accepts an array as an argument. Within the function, sort the array alphabetically or numerically. Return the sorted array.

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");


//write your code here
function sortArray (x){
    return x.sort();
}



// do not change
// for testing purposes

console.log(sortArray(input));