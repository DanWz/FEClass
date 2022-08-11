var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var numberGrade = parseInt(input[0]);
var letterGrade;
//numberGrade = 1;

//write your code here
if (numberGrade){
    if (numberGrade >= 90) {
        letterGrade = 'A';
        console.log(letterGrade);
    } else {
        if (numberGrade >= 80) {
            letterGrade = 'B';
            console.log(letterGrade);
        } else { 
            if (numberGrade >= 70) {
            letterGrade = 'C';
            console.log(letterGrade);
            } else {
                if (numberGrade >= 60) {
                letterGrade = 'D';
                console.log(letterGrade);
                } else {
                    letterGrade = 'F';
                    console.log(letterGrade);
                }
            }
        }
    }
}