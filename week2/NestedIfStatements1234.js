var fs = require("fs");
 var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
 var num1 = parseInt(input[0]);
 var num2 = parseInt(input[1]);
 var num3 = parseInt(input[2]);
 var num4 = parseInt(input[3]);
 //num1 = 3;
 //num2 = 3;
 //num3 = 2;
 //num4 = 3;
 
 
 //write your code here
 if (num1 >= num2){
     if (num3 >= num4){
     console.log('Both statements are true.');
     } else {
         console.log('The first statment is true but the second is not.');
     }
 }
 console.log('Program ended.');