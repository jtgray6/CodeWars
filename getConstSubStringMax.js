

// Given a lowercase string that has alphabetic characters only and no spaces, 
// return the highest value of consonant substrings
// * TIP: look into different ways of using Array.split() method

// EXAMPLES
// -- We shall assign the following values: a = 1, b = 2 ... z = 26.

// For example, for the word "zodiacs", solve("zodiacs") = 26
// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

const conSolve = (str) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphaVals = {};
    for (let i=0; i<alphabet.length; i++){
        alphaVals[alphabet[i]]=i+1;
    }
    const splitStr = str.split(/a|e|i|o|u/);
    const conSums = [];
    for (let i=0; i<splitStr.length; i++){
      let sum = 0;
      const letterArr = splitStr[i].split('');
      for (let j=0; j<letterArr.length; j++){
        sum+=alphaVals[letterArr[j]];
      }
      conSums.push(sum);
    }
    return Math.max(...conSums)
  };
  
  console.log(conSolve('zodiac')); // 26
  console.log(conSolve('strength')); // 57
  console.log(conSolve('chruschtschov')); // 80
  console.log(conSolve('abcde')); // 9 
  console.log(conSolve('')); // 0