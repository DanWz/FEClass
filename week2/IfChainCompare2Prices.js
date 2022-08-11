var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var money = parseInt(input[0]);
var costOfSoda = parseInt(input[1]);

//money = 10
//costOfSoda = 100

//write your code here
if (money >= costOfSoda){
    console.log('I can buy a soda!');
}else
{
    console.log('I need to earn some more money!');
    
}