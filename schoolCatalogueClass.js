// Javascript Class øvelse

class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    // getters
    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    // methods
    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }

    pickSubstituteTeacher(substituteTeachers) {
        // Denne metode vælger en tilfældig lærer i substitureTeachers array
        const arrayLength = substituteTeachers.length;
        const randomNumber = Math.floor(Math.random() * arrayLength);
        return substituteTeachers[randomNumber];
    }

    // setter
    set numberOfStudents(number) {
        if (typeof number === "number") {
            this._numberOfStudents = number;
        } else {
            console.log("You have to enter a number!");
        }
    }
}


// Primary shcool class
class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, "primary", numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    // getter
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}


// Highschool class
class Highschool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, "highschool", numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    // Getter
    get sportsTeams() {
        console.log(this._sportsTeams);
    }
}



const lorraineHansbury = new PrimarySchool("Lorraine Hansbury", 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
console.log(`The substitue teacher will be: ${lorraineHansbury.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])}`);

const alSmith = new Highschool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.sportsTeams;

