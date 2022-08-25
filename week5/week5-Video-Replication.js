/*
object-Oriented Programming

Attributes:
DVD Player
---------------
Height
Width
Weight
Color

Functionality:
Play
Fast Forward
Rewind
Pause

DVD
-----
Length
Image
Size

four main pillars:
Abstraction - allows us to hide complexity. movement 
Encapsulation - hiding the details of how something works. like an engine.
Inheritance - allows objects to inherit properties/functionality 
Polymorphism - 
*/

//////////////////////////////////////CLASSES//////////////////////////////////////
//classes are recommended to be pascal not camel case.
class Student0 {
    constructor(){
        this.firstName = 'Jim';
        this.lastName = 'Cricket';
        this.phoneNumber = '4567891';
        this.grade = 'A';
    }
};
class Student {
    constructor(firstName, lastName, phoneNumber, grade){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    }
    introduce() { //a method is like a function the belongs to the class in which it is placed in this case this is a student method.
        if (this.phoneNumber === undefined) {
            this.phoneNumber = 'Check with main office';
        }
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`);
    }
};

let student1 = new Student('Bog', 'Lord', 2084567897, 'C'); 
//'new' is the process of instantiation 'Student' instantiates the object and enguages the constructor to build an object that is an instance of the class 'Student'
let student2 = new Student('jiminy', 'Boyo', undefined, 'B')

student1.introduce();
student2.introduce();

//when to create a new class? any time you encounter a new concept that requires specific roles and functionality.
//////////////////////////////////////INHERITANCE//////////////////////////////////////
/*
class PromotionSender {
    constructor() {

    }
    sendNotification(notification) {
        console.log('Sending: ' + notification);
    }
    findUsersWithStatus(status) {
        let users = getUsers(status);
        return users;
    }
    calculateDiscount(status) {
        if (status === 'GOLD') {
            return .3;
        } else if (status === 'SILVER') {
            return .15;
        }
        return 1;
    }
}

class CollectionSender {
    constructor () {

    }
    sendNotification(notification) {
        console.log('Sending: ' + notification);
    }
    findUsersWithStatus(status) {
        let users = getUsers(status);
        return users;
    }
    calculateFee (status) {
        if (status === 'OVERDUE') {
            return 10;
        } else if (status === 'DELINQUENT') {
            return 25;
        }
        return 5;
    }
}
*/

// now rebuilding aboce to use in heritence:
class NotificationSender{
    constructor(status) {
        this.status = status;
    }
    sendNotification(notification) {
        console.log('Sending: ' + notification);
    }
    findUsersWithStatus(status) {
        let users = getUsers(status);
        return users;
    }
}
class PromotionSender extends NotificationSender { // the extends keyword is used to inherit from another class.
    constructor(status) {
        super(status); //super refers to the parent class. when it is followed by ()'s it referes to the parent's constructor. you must always call the 'Parent's' constructor when you extend a class
    }
    
    calculateDiscount(status) {
        if (status === 'GOLD') {
            return .3;
        } else if (status === 'SILVER') {
            return .15;
        }
        return 1;
    }
}

class CollectionSender extends NotificationSender {
    constructor(status) {
        super(status);
    }

    calculateFee(status) {
        if (status === 'OVERDUE') {
            return 10;
        } else if (status === 'DELINQUENT') {
            return 25;
        } else {
            return 5;
        }
    }
}


let collectionSender = new CollectionSender('OVERDUE');
collectionSender.sendNotification('this is a test collections notification');
//let collectionSender = new CollectionSender('OVERDUE');
collectionSender.calculateFee();

//////////////////////////////////////CLASSES//////////////////////////////////////
//////////////////////////////////////CLASSES//////////////////////////////////////
//////////////////////////////////////CLASSES//////////////////////////////////////
//////////////////////////////////////CLASSES//////////////////////////////////////
