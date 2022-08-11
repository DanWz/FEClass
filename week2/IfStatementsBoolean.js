var fs = require("fs");
 var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
 var age = parseInt(input[0]);
 var canDrive = false;
 
 //Write your code here
 if(age >= 16 ){
     canDrive = true;
     console.log(canDrive)
 }