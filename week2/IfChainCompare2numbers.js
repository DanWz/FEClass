//how to check to see if this is a pallendrome.
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var num1 = parseInt(input[0]);
var num2 = parseInt(input[1]);

//num1 = 11
//num2 = 10

//write your code here
if (num1 >= num2){
    if (num1 == num2){
        console.log('Num1 is equal to Num2');
    }
    else {
        console.log(num1);
    }
}
else {
    console.log(num2);
}