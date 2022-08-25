////Const and Let////
var x = 20;
{ /// it appears the let value allows to create a variable within the block a similar named variable for example should not be affected when using let inside the block.
    let x = 2;
    console.log(x); // should log 2
}
console.log(x); // should log 20
{ // declaring a new value to x which is supposed to change the variable defined in line 2 within and outside of the block.
    x = 2; // no 'let' or 'var'. variable is assigned new value.
    console.log(x); //should log 2
}
console.log(x); //should now be 2
{
    var x = 20;
    console.log(x); //should log 20 
}
console.log(x); //should now be 20 again.
const y = 30;
console.log(y);
{
    let y = 3; // let can be used to change const variables within a codeblock.
    console.log(y);
}
console.log(y);
{
    let z = 'sauce';
    console.log(z);

}
console.log(z);
/*
{
    y = 3; // should not work because const cannot be assigned in such away as to persist outside of the code block. uncaught typeError.
    console.log(y);
}

{
    var y = 3; // should not work because variable has already been declared and can't be assigned a new value. prevents whole script from working.
    console.log(y);
}


////////// Template literals /////////
// create multiline strings. used the back tick instead of the apostrophy. same key at the tilda.
let myString = `Hello
world
my name
is Dan`;

console.log(myString);

let otherString = 'Hello\nworld\nmy name\nis Dan';
console.log(otherString);

let otherOtherString = 'Hello' +
    '\nworld' +
    '\nmy name' +
    '\nis Dan';
console.log(otherOtherString);

console.log(`Six times five = ${ 5 * 6}`);

////////Arrow Functions or Fat arrow function////////
// binding the current scope to the function.
// it is best practice to use const when assigning variable and functions like below.
const createFullName = (firstName, lastName) => `${firstName} ${lastName}`;
const someFunction = (a, b) => {
    let result = '';
    for (let i = 0; i < b; i++) {
        result += a;
    }
    return result;
}

console.log(createFullName('John', 'Cena'));
console.log(someFunction('heya', 2))


//////////////////////////////////////Callbacks //////////////////////////////////////
let userName = sentHttpRequest('getUser');
console.log(userName);

function logUsername(user){
    console.log(user);
}

sendHttpRequest('getUser', logUsername); // when using a callback, the function is not called directly but by the original function 'sentHttpRequest'

sendHttpRequest('getUser', user => console.log(user)); // this is an anonymous function call.


//////////////////////////////////////Promises //////////////////////////////////////
// an object that indicates the eventual completion (success || failure) of an operation
// then and catch methods are used to indicate what should occur once the operation completes in some way.

soSomethingThatReturnsAPromise()
    .then((Value) => {
        console.log(value);
    }).catch((err) =>{
        console.error(err):
    });

////this above and below would in theory would produce the same results.
function handleEvent (value) {
    console.log(value);
};
function handleError (err){
    console.error(err);
};
soSomethingThatReturnsAPromise()
    .then(handleEvent)
    .catch(handleError);

    */