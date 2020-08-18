// (1) re-state problem
// (2) ask questions
// (3) inputs and outputs
// (4) go through some examples
// (5) high level strategy
// (6) pseudocode steps
// (7) write code
// (8) discuss time complexity

// August 17, 2020
// PART 1
// * Given string containing combination of letters from a-z,
// * each character has the value of its position in the alphabet
// * i.e. a=1, z=26 etc. 
// return the sum of the values of each letter in string

/* Your code here: */

const solve = (str) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphaVals = {};
    for (let i=0; i<alphabet.length; i++){
      alphaVals[alphabet[i]]=i+1;
    }
    if (typeof str === 'string'){
      let sum = 0;
      const letterArr = str.split('');
      for (let j=0; j<letterArr.length; j++){
        sum+=alphaVals[letterArr[j]]
      }
      return sum
    }
    else {
      return 'invalid input';
    }
  }
  
  /* Your code here^ */
  
  console.log(solve('zodiac')); // 58
  console.log(solve('strength')); // 111
  console.log(solve('chruschtschov')); // 167
  console.log(solve('abcde')); // 15
  console.log(solve('')); // 0
  console.log(solve(false)); // 'invalid input'
  console.log(solve(null)); // 'invalid input'