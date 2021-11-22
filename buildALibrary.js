// Øvelse med Classes & inheritance
// der er en Media, Book og Movie class

class Media {
    // Media class samler alt hvad der er fælles for de 3 classes title, isCheckedOut, ratings
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    // getters
    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    // method that change the state of isCheckedOut
    toggleCheckOutStatus() {
        if(this._isCheckedOut === false){
            this._isCheckedOut = true;
        } else {
            this._isCheckedOut = false;
        }
    }

    // method that returns average value of ratings
    getAverageRating() {
        let sum = 0;
        this._ratings.forEach(value => {
            sum += value;
        });
        return sum / this._ratings.length;
    }

    // method that adds to ratings array
    // jeg ved ikke hvorfor den ikke skal være en setter.
    addRating(score) {
        this._ratings.push(score);
    } 

    // setters
    set isCheckedOut(state) {
        if(state === false || state === true){
            this._isCheckedOut = state;
        } else {
            console.log("You have to enter true or false...");
        }
    }


};


// book class
class Book extends Media {
    // Book class arver title fra Media class og har selv author og pages
    constructor(title, author, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }

    // getters
    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }

};


// movie class
class Movies extends Media {
    // Movie class arver title fra Media class og har selv director og runtime
    constructor(title, director, runtime){
        super(title);
        this._director = director;
        this._runtime = runtime; 
    }

    get director() {
        return this._director;
    }

    get runtime() {
        return this._runtime;
    }
    
};



// new book instance
const historyOfEverything =new Book('Bill Bryson', 'A Short History of Nearly Everything', 522);    // Husk new ved oprettelse af et nyt object.
historyOfEverything.toggleCheckOutStatus();
console.log(`Book instance is checked out: ${historyOfEverything.isCheckedOut}`);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(`Book instance average rating: ${historyOfEverything.getAverageRating()}`);

// new movie instance
const speed = new Movies('Jan de Bont', "Jan de Bont", 116);
speed.toggleCheckOutStatus();
console.log(`Movie instance is checked out: ${speed.isCheckedOut}`);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(`Speed instance average rating: ${speed.getAverageRating()}`);