// Write a function that takes as its input a string 
// and returns an array of arrays as shown below 
// sorted in descending order by frequency 
// and then by ascending order by character.

// "aaabbc" => [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
// "mississippi" => [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
// "" => [ ]
//can be lower or upper case

//pseudocode
//lower case the string, split into array of chars
//create empty counts = [] unsorted at this point
//loop thru char array and do find on counts where count[0]===char
//if not found, create letterCount = [], letterCount[0]=char, letterCount[1]=1, push letterCount into counts
//if found, foundChar[1]+=1
//
//return counts; sorted at this point

function characterFrequency (str) {
    const lowerStr = str.toLowerCase();
    const strArr = lowerStr.split('');
    const counts = [];
    strArr.forEach(char => {
      const foundChar = counts.find(count => {
        return count[0]===char;
      });
      if(foundChar){
        foundChar[1]+=1;
      } else {
        const letterCount = [];
        letterCount[0]=char;
        letterCount[1]=1;
        counts.push(letterCount);
      };
    });
    counts.sort((a,b) => {
      if(a[1]>b[1]){
        return -1
      } else if (a[1]<b[1]){
        return 1
      } else if (a[0]<b[0]){
        return -1
      } else if (a[0]>b[0]){
        return 1
      }
      return 0
    });
    
    return counts
  };
  
  console.log(characterFrequency("mississippi"));