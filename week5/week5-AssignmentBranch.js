
//////////////////////////////////////MENU APP//////////////////////////////////////
// teams and players"
/*
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

*/
//////////////////////////////////////PERSONAL MENU APP//////////////////////////////////////
class Spells {
    constructor (name, attribute) {
        this.name = name;
        this.attribute = attribute;
    }

    describe() {
        return `${this.name}: ${this.attribute}`;
    }
}

class PreparedSpellList {
    constructor (name) {
        this.name = name;
        this.spellList = [];
    }

    addSpell(newSpell) {
        if (newSpell instanceof Spells){
            this.spellList.push(newSpell);
        } else {
            throw new Error(`You can only add an instance of Spells. Entered data ${newSpell} is not an instance of the correct class.`);
        }

    }

    describe() {
        return `Spell list contains ${this.spellList.length} spells`;
    }   
}

class Menu {
    constructor() {
        this.spellLists = [];
        this.chosenSpellList = null;
    }

    start() {
        let pick = this.showTopMenuOptions();

        while (pick != 0) {
            switch (pick) {
                case '1':
                    this.createPreparedSpellList();
                    break;
                case '2':
                    this.ManagePreparedSpellList();
                    break;
                case '3':
                    this.deletePreparedSpellList();
                    break;
                case '4':
                    this.viewPreparedSpellLists();
                    break;
                default:
                    pick = 0;
            }
            pick = this.showTopMenuOptions();
        }

        alert(`happy casting!`);
    }

    showTopMenuOptions() {
        return prompt(`
        0) Exit
        1) Create new Spell list
        2) Manage Spell list
        3) Delete Spell list
        4) Display all Spell lists
        `);
    }

    showSpellListMenuOptions(spellListDetails) {
        return prompt(`
        0) Exit Spell List Menu
        1) Create Spell
        2) Remove Spell
        ----------------------
        ${spellListDetails}
        `);
    }

    createPreparedSpellList() {
        let list = prompt('What will this Spell list be called');
        this.spellLists.push(new PreparedSpellList(list));
        console.log(`${this.spellLists[this.spellLists.length -1].name}`)
    }

    ManagePreparedSpellList() {
        let PreparedSpellListString = '';
        for (let i = 0; i < this.spellLists.length; i++) {
            PreparedSpellListString += i + ') ' + this.spellLists[i].name + '\n';
        }
        let index = prompt(`List of Lists: 
        ${PreparedSpellListString}
        Enter the number for the list you would like to view.`);
        function SpellListUpdater () {
        if (index > -1 && index < this.spellLists.length) {
            this.chosenSpellList = this.spellLists[index]
            console.log(`you have selected to manage ${this.chosenSpellList.name}`);
            //if (this.chosenSpellList === 'undefined')
            let info = 'Spell List: ' + this.chosenSpellList.name + '\n';

            for (let i = 0; i < this.chosenSpellList.spellList.length; i++) {
                console.log('entered loop');
                console.log(this.chosenSpellList)
                info += i + ') ' + this.chosenSpellList.spellList[i].name + ': ' 
                + this.chosenSpellList.spellList[i].attribute + '\n';
            }
            console.log(info);
            let selection = this.showSpellListMenuOptions(info);
            while (selection != 0) {
                switch (selection) {
                    case '1':
                        this.createSpell();
                        if (index > -1 && index < this.spellLists.length) {
                            this.chosenSpellList = this.spellLists[index]
                            console.log(`you have selected to manage ${this.chosenSpellList.name}`);
                            //if (this.chosenSpellList === 'undefined')
                            let info = 'Spell List: ' + this.chosenSpellList.name + '\n';
                
                            for (let i = 0; i < this.chosenSpellList.spellList.length; i++) {
                                console.log('entered loop');
                                console.log(this.chosenSpellList)
                                info += i + ') ' + this.chosenSpellList.spellList[i].name + ': ' 
                                + this.chosenSpellList.spellList[i].attribute + '\n';
                            }
                            selection = this.showSpellListMenuOptions(info);
                            console.log('exiting createspell block')
                        }
                        break;
                    case '2':
                        this.removeSpell();
                        // break; ///I will test why this was commented out.
                    default:
                        selection = this.showSpellListMenuOptions(info);;
                }
                console.log(index);

                //selection = this.showSpellListMenuOptions(info);
            }
        } else {
            alert('no entry specified');
        }
    }

    deletePreparedSpellList() {
        let index = prompt('Enter the index of the Spell list you wish to delete.');
        if (index > -1 && index < this.spellLists.length) {
            this.spellLists.splice(index, 1);
        }
    }

    viewPreparedSpellLists() {
        let PreparedSpellListString = '';
        console.log('view spell list');
        for (let i = 0; i < this.spellLists.length; i++) {
            PreparedSpellListString += i + ') ' + this.spellLists[i].name + '\n';
        }
        alert(PreparedSpellListString);
    }

    createSpell() {
        let newSpell = prompt('what is the name of your new spell?');
        let newSpellAttribute = prompt('what does your new spell do?');
        this.chosenSpellList.spellList.push(new Spells(newSpell, newSpellAttribute));

    }

    removeSpell(){
        let oldspell = prompt('Enter the index of the spell you would like to remove from this list.');
        if (oldspell > -1 && oldspell < this.chosenSpellList.length) {
            this.chosenSpellList.spellList.splice(oldspell, 1);
        }
    }
}

let menu = new Menu();
menu.start();