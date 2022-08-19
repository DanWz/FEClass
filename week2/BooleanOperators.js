////Using Boolean Operators, print the result of a is greater than b or b and c are greater than d.

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);
var d = parseInt(input[3]);

//a = 3;
//b = 5;
//c = 5;
//d = 1;

//Write your code here
console.log(a > b || b > d && c > d);

////Using boolean operators, print true or false if age is greater than or equal to 16.
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var age = parseInt(input[0]);


//write your code here
console.log(age >= 16);

////If the day is "Sunday" or "Saturday", print true. Otherwise, print false.
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var day = input[0];


//Write your code here
console.log(day === "Sunday" || day === "Saturday");

