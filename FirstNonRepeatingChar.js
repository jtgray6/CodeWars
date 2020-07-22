// write a function that loops through a string of random characters, and returns the index(i) of the first non-repeating character

function indexFirstNonRepeatingChar (string){
    for (let i=0; i<string.length; i++){ 
      //loop thru string
      let currentCharacter = string.charAt(i) 
      //currentCharacter is equal to string char at index i
      if (string.indexOf(currentCharacter)==i && string.indexOf(currentCharacter, i+1)==-1){ 
        // if the index of currentCharacter is equal to i & 
        // the indexOf function returns -1 (found no matching char) when starting with char following currentChar
        return i
      }
    }
    return -1
  }
  
  console.log(indexFirstNonRepeatingChar('aaafebefc')); // returns 5
  console.log(indexFirstNonRepeatingChar('abcd')); // returns 0
  console.log(indexFirstNonRepeatingChar('aabbcc')); // returns -1
  