// re-state problem
// ask questions
// inputs and outputs
// go through some examples
// high level strategy
// pseudocode steps
// write code
// discuss time complexity

// given a string, return true if it is a palindrome and false if it is not

function isPalindrome(str) {
    if (typeof str === 'string'){
      const charArray = str.split('');
      const iterations = Math.floor(str.length/2);
      for (let i=0; i<iterations; i++){
        if (charArray[i] !== charArray[charArray.length-(i+1)]){
          return false;
        }
      }
      return true;
    }
    else {
      return false
    }
  };
  
  // isPalindrome('racecar'); // true
  // isPalindrome(''); // true
  // isPalindrome(9); // false
  // isPalindrome('hello'); // false
  
  // determine number of iterations for checking chars ->  Math.floor(str.length/2)
  //for loop through first half of string
  //each character, check if str[i] == str[-(i+1)]