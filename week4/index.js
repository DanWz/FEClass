
////////////////////////////////////////////////Arrays:////////////////////////////////////////////////
let customerNames = [];
customerNames.push("Ben Kingsly");
customerNames.push("Daniel Radcliff");

console.log(customerNames[1]);
for (let i = 0; i < customerNames.length; i++) {
    console.log(customerNames[i]);
}

//for of loop
for (Name of customerNames) {
    console.log(Name);
}

////////////////////////////////////////////////Functions////////////////////////////////////////////////
//// these are instructions and are not run until executed.
function countUpTo99 ( ) {
    for (let i = 0; i<100; i++) {
        console.log(i);
    }
}
////calling the function:
//countUpTo99 ();

////concatination of firstname and lastname.
function createFullName (firstName, lastName ) {
    console.log(firstName + " " + lastName);
    //return appears to be required to preserve what is done within the function.
    return lastName + ", " + firstName;
}
////calling the function:
createFullName ("Billy", "Bob");
let fullName = createFullName ("Robin", "Williams");
console.log(fullName);


////////////////////////////////////////////////IntermediateArrayMethods////////////////////////////////////////////////
let names = ['Sam', 'Eric', 'George', 'Steve', 'Nicodemus'];
let lengths = names.map(function(element) {
    return element.length;
});
console.log(lengths);

////accumulator
let sum = lengths.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});
console.log(sum);

////forEach method
names.forEach(function(element){
    console.log(element);
});

////filter method
let evens = names.filter(function(element) {
    return element.length % 2 == 0;
});
console.log(evens);


////splice method to remove item from array
let removedElement = names.splice(1, 3);
console.log(removedElement);


////////////////////////////////////////////////OBJECTS////////////////////////////////////////////////
let dvdPlayer = {
    height: 3,
    width: 18,
    depth: 12,
    weight: 7,
    color: 'Yellow',
    dvdName: 'Riddick',
    printDVDName: function(){
        console.log(this.dvdName)
    }
};

////dot notation

console.log(dvdPlayer.width);
dvdPlayer.printDVDName();
dvdPlayer.dvdName = 'Batman';
dvdPlayer.printDVDName();
