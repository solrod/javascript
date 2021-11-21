// Øvelse med Classes

class Media {
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
    addRating(score) {
        this._ratings.push(score);
    } 

    // setter
    set isCheckedOut(state) {
        if(state === false || state === true){
            this._isCheckedOut = state;
        } else {
            console.log("You have to enter true or false...");
        }
    }
}


// book class
class Book extends Media {
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

}


// movie class
class Movies extends Media {
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
    
}




let media1 =new Media("Wicked");    // Husk new ved oprettelse af et nyt object. isChecked out & rating er foruddeffineret og derfor kun 1 indtastning
media1.addRating(23)
console.log(media1.getAverageRating());