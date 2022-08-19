////Create a for loop that prints out a multiplication table for num from 1 through 10 as follows (the value of num will be input by the user):
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var num = parseInt(input[0]);


//Write your code here
for (i = 1; i <= 10; i++){
    {
      console.log(num + " x " + i + " = " + (num*i));  
    }
}


////Create a do/while loop that will print the userNumber and then add 6 after each loop. Stop the loop once the number is greater than or equal to 100.
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var userNumber = parseInt(input[0]);

//write your code here
do {
    console.log(userNumber);
    userNumber += 6;
} while(userNumber <= 100);

////Write a for loop that prints the numbers 0 to x. The x has been initialized for you and will be based on a user's input.
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var x = parseInt(input[0]);
//x = -10;

//write your code here
let i = 0;
if (x >= i){
    for (i = 0; i <= x; i++){
        console.log(i);
    }
} else {
    for (i = 0; i >= x; i--){
        console.log(i);
    }
}


////Write a while loop that does a countdown from the variable countdown. This number represents the number that a user enters. 
////Check to make sure the number is not larger than 10, but greater than or equal to 3. Each time the loop runs, print to the 
////console the value of the counter followed by three periods (…). Once out of the loop, print to the console "We have lift off!". 
////If a number is less than 3 or greater than 10, then the only message printed to the console is "We have lift off!"

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var countDown = parseInt(input[0]);

//write your code here
if (countDown >= 3 && countDown <= 10){
    while (countDown >= 1){
        console.log(countDown + "..."); countDown--;
    }
}

console.log("We have lift off!");


//Using the supplied variables, create a loop of your choice that will add cups of rice to a bowl. Each time a cup of rice is added, 
//print "The bowl contains X cups of rice.", 
//where X is the number of cups added. Once the number of cups called for has been reached, print "We have enough rice!".

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");

var requiredCupsOfRice = parseInt(input[0]);
var currentCupsOfRice = 0;

//write your code here
do {
    currentCupsOfRice++;
    console.log("The bowl contains " +  currentCupsOfRice + " cups of rice.");
}while (currentCupsOfRice < requiredCupsOfRice);
console.log("We have enough rice!");


////Let's play a game. The game will consist of 100 turns. If the number of turns is even, you gain 5 points. If it's odd, you gain 3 points. 
////If ever your score is equal to 125, you are reset back to 25 points. This will only be allowed to happen once. The game ends if you are 
////able to make it through 100 turns or you reach more than 290 points, whichever comes first. Using a for loop, create the game.
var points = 0;
var pointsReset = false; 

//write your code here
for (i=0; i <= 100 && points < 290; i++){
    if (points === 125 && pointsReset === false){
        points = 25;
        pointsReset = true;
    } else {
        if (i % 2) {
            points += 3;
        } else {
            points += 5;
        }
    }
    console.log("Turns: " + i + " Score: " + points);
}

////Write a for loop that prints every third number from 0 up to, and including, 99.
//write your code here
for(i=0; i<=99; i++){
    console.log(i);
    for(h=0; h<2; h++){
        i++;
    }
}


////Check to see if userNumber is between 1 and 100. If it is, create a while loop that prints all integers starting with userNumber to 100. 
////If not, print "Your number was not between 1 and 100."
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var userNumber = parseInt(input[0]);

//write your code here
if(userNumber >= 1 && userNumber <=100){
    while(userNumber <= 100){
        console.log(userNumber); userNumber++;
    }
} else {
    console.log("Your number was not between 1 and 100.");
}