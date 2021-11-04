
// Write your code here:
// Write your code here:
const dogFactory = (name, breed, weight) => {

  return {
  _name: name,
  _breed: breed,
  _weight: weight,
  
  // getters
  get name() {
    if (typeof this._name === 'string'){
      return this._name;
    } else {
      return "Missing a name."
    }
  },

  get breed() {
    if (typeof this._breed === 'string'){
      return this._breed;
    } else {
      return 'Missing a breed.'
    }
  },

  get weight() {
    if (typeof this._weight === 'number'){
      return this._weight;
    } else {
      return 'Missing a weight';
    }
  },

  // setters
  set name(name){
    this._name = name;
  },

  set breed(breed){
    this._breed = breed;
  },

  set weight(weight){
    this._weight = weight;
  },

  // metoder der udfører handlinger på objektet
  bark: function() {
    return 'ruff! ruff!';
  },

  // lægger 1 til vægten
  eatTooManyTreats: function(){
    this._weight +=1;
  }


} //objektet slut

}//funktionen slut


hund1 = dogFactory('Peter', 'Pug', 35);
console.log(hund1.name)
hund1.name = 'Joe'
hund1.eatTooManyTreats() // plus 1 til vægten
console.log(hund1.weight)
console.log(hund1.bark())







