// Num Jewels in Stones:

// Given two strings as your input (with upper and lower case alphabetic characters), return a number indicating how many times a character from string 1 occurs in string 2

// @param {string} J
// @param {string} S
// @return {number}

// Quadratic time complexity solution:

// var numJewelsInStones = function(J, S) {
//     //initalize a count that starts at 0  
//     //outer for loop (i) through str1 and,
//     //  inner for loop (j) through str2
//     //    if str1[i] equals str2[j], increase count by 1
//     //exit loops and then return count
//     let count = 0;
//     for (let i=0; i<J.length; i++){
//         for (let j=0; j<S.length; j++){
//             if (J[i] === S[j]){
//                 count += 1;
//             }
//         }
//     }
//     return count;
//   };

// Linear time complexity solution:

var numJewelsInStones = function(J, S) {
    //initalize a count at 0
    //loop through S
    //for each char, see if J includes char
    //  if true, increase count by 1, else do nothing
    //return count
    let count = 0;
    for (let i=0; i<S.length; i++){
      J.includes(S[i]) ? count+=1 : null;
    }
    return count;
  };
  
  console.log(numJewelsInStones('aA', 'aAAbbb')); // 3
  console.log(numJewelsInStones('z', 'ZZ')); // 0
  console.log(numJewelsInStones('bZw', 'BbzZZwW')); // 4