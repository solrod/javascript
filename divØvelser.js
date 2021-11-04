// Find factorial nummeret
/*
const factorial = (num) => {
    let factorialNum =1 ;
    for (let i = num; i >= 1; i--){
      factorialNum *= i
    }
    return factorialNum;
  }
  
  console.log(factorial(6)); // 720
*/

// array øvelse 

const groceries = (array) => {
  newString = ""
  lastElement = array[array.length-1].item
  
  if (array.length === 1){
    newString += array[0].item
    
  } else {
  array.forEach(element => {
    if(element.item == lastElement){
      newString += `and ${lastElement}`;
    } else {
      if (array.length === 2){
        newString += `${element.item} `
      } else {
      newString += `${element.item}, ` 
      }
    }
  })};

  return newString
};

console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}]  ));
// returns 'Carrots, Hummus, Pesto and Rigatoni'

