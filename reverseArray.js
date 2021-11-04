// Write your code here:
const reverseArray = (array) => {
    let newArray = [];
    array.forEach(reverseElement => {
        newArray.unshift(reverseElement);
    });
    return newArray
  };
  
  
  
  
  
  
  
  // When you're ready to test your code, uncomment the below and run:
   
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence)) 
  // Should print ['This', 'will', 'all', 'make', 'sense.'];
  