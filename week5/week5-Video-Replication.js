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
console.log(collectionSender.calculateFee()); //why does this return 5? doesn't status = 'OVERDUE"

//////////////////////////////////////HANDLING EXCEPTIONS//////////////////////////////////////
//TRY AND CATCH BLOCKS TO CATCH EXCEPTIONS AND HANDLE ERRORS.
//let list = [];
// list.push('Hello');
// console.log('goodbye');

try {
    list.push('Hello');
} catch (err) {
    console.log(err);
}
console.log('goodbye');

// try catch blocks should be used to handle code that we do not fully control. it is not just a way to travers poor personal code.


//////////////////////////////////////MENU APP//////////////////////////////////////
// teams and players"
class Player {
    constructor (name, position) {
        this.name = name;
        this.position = position;
    }
    describe() {
        return `${this.name} plays ${this.position}.`;
    }
}

class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
    }

    addPlayer(player) {
        if (player instanceof Player) {
            this.players.push(player);
        } else {
            throw new Error(`You can only add an instance of Player.Argument is not a player: ${player}`);
        }
    }
    
    describe() {
        return `${this.name} has ${this.players.length} players.`;
    }
}

class Menu {
    constructor() {
        this.teams = [];
        this.selectedTeam = null;
    }

    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createTeam();
                    break;
                case '2':
                    this.viewTeam();
                    break;
                case '3':
                    this.deleteTeam();
                    break;
                case '4':
                    this.displayTeams();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }
    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new team
        2) view team
        3) delete team
        4) display all teams
        `);
    }

    showTeamMenuOptions(teamInfo) {
        return prompt(`
        0) back
        1) create player
        2) delete player
        ----------------------
        ${teamInfo}
        `);
    }

    displayTeams() {
        let teamString = '';
        for (let i = 0; i < this.teams.length; i++) {
            teamString += i + ') ' + this.teams[i].name + '\n';
        }
        alert(teamString);
    }

    createTeam() {
        let name = prompt('Enter name for new team');
        this.teams.push(new Team(name));
    }

    viewTeam() {
        let index = prompt('Enter the index of the team you wish to view:');
        if (index > -1 && index < this.teams.length) {
            this.selectedTeam = this.teams[index];
            let description = 'Team Name: ' + this.selectedTeam.name + '\n';

            for (let i = 0; i < this.selectedTeam.players.length; i++) {
                description += i + ') ' + this.selectedTeam.players[i].name
                + ' - ' + this.selectedTeam.players[i].position + '\n';
            }

            let selection = this.showTeamMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createPlayer();
                    break;
                case '2':
                    this.deletePlayer();
                    // break;
            }
        }
    }

    deleteTeam(){
        let index = prompt('Enter the index of the team you wish to delete');
        if (index > -1 && index < this.teams.length) {
            this.teams.splice(index, 1);
        }
    }

    createPlayer() {
        let name = prompt('Enter name for new player');
        let position = prompt ('Enter position for new player');
        this.selectedTeam.players.push(new Player(name, position));
    }

    deletePlayer() {
        let index = prompt('Enter the index of the player you wish to delete:');
        if (index > -1 && index < this.selectedTeam.players.length) {
            this.selectedTeam.players.splice(index, 1);
        }
    }
};

let menu = new Menu();
menu.start();
//////////////////////////////////////CLASSES//////////////////////////////////////
//////////////////////////////////////CLASSES//////////////////////////////////////
