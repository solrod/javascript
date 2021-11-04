// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }

  // 3 create object
  const pAequorFactory = (num, array) => {
    return {
        specimenNum: num,
        dna: array,

        // 4 simulate a mutation
        mutate(){
            // console.log(this.dna) // original array
            let randomNum = Math.floor(Math.random() * this.dna.length); // vælger tilfældigt index fra array
            console.log(`tilfældigt indexNr. ${randomNum}`)
            const randomBase = this.dna[randomNum]; // Pick random base from array
            console.log(`tilfældig valgt base med indexnr ${randomNum} er ${randomBase}`)
            let newBase = returnRandBase();

            // As long as newBase is equal to randomBase it will return a new base
            do {
              newBase = returnRandBase();
            }
            while (newBase === randomBase);
            console.log(`Den nye tilfældigt valgte base er ${newBase}`);
            
            this.dna[randomNum] = newBase; // returnerer arrayet med den nye base sat ind
            return this.dna   
        }, // mutate function slut
        
        // 5. compare 2 objects bases
        compareDNA(pAequor){
          //console.log(this.dna); // mutated1 
          //console.log(pAequor.dna) // mutated2
          let count = 0; // count for each time there is a match between the 2 arrays
          for (let i=0; i < this.dna.length; i++){
            if (this.dna[i] === pAequor.dna[i]){
              count += 1; // add 1 to count when there is a match
            }; // if statement slut
          }; // for loop slut
          console.log(`Specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${((count * 100) / this.dna.length).toFixed(2)} % DNA in common.`)
        }, // compare function slut

        // 6. Will return true if at least 60% of the dna is C or G bases
        willLikelySurvive(){
          let cOrGCount = 0; // counts C and G bases
          for(let i=0; i<this.dna.length; i++){
            if (this.dna[i] === 'C' || this.dna[i] === 'G'){
              cOrGCount +=1
            }; // if statement slut
          }; //for loop slut
          //console.log(((cOrGCount * 100) / this.dna.length))
          if (((cOrGCount * 100) / this.dna.length) >= 60){
            return true;
          } else {
            return false
          };
          
        }, // willlikelySurvive function slut
    }
  };

let storedPaequorInstances = []; // 30 stored instances

//let mutated1 = pAequorFactory(11, mockUpStrand());
//let mutaded2 = pAequorFactory(23, mockUpStrand())
//mutated1.compareDNA(mutaded2);
//console.log(mutated1.willLikelySurvive());

// 7. Store 30 instances in a array, only if they pass willLikelySurvive function
for (let i = 1; i < 31; i++){
  let instance = pAequorFactory(i, mockUpStrand());
  if(instance.willLikelySurvive() === true){
    storedPaequorInstances.push(instance);
  } else {
    i -= 1;
  };

}; // for loop

console.log(storedPaequorInstances)