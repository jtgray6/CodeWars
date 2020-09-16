// write a function that loops through a string of random characters, and returns the index(i) of the first non-repeating character

// time complexity: O(n^2) -> quadratic
function indexFirstNonRepeatingChar (string){
    for (let i=0; i<string.length; i++){ 
      //loop thru string
      let currentCharacter = string.charAt(i) 
      //currentCharacter is equal to string char at index i
      if (string.indexOf(currentCharacter)===i && string.indexOf(currentCharacter, i+1)===-1){ 
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

// time complexity: O(n^2) -> quadratic
// const firstNonrepeatingChar = (str) => {
//   //loop through str and set char equal to loop iteration of str
//   //if index of char === last index of char, return char
//   //exits loop, return 'sorry'
//   for (let i=0; i<str.length; i++){
//     if (str.indexOf(str[i])===str.lastIndexOf(str[i])){
//       return str[i];
//     }
//   }
//   return 'sorry';
// };

// time complexity: O(2n) drop constant O(n) -> linear
// const library = {};
// for (let i=0; i<str.length; i++){
//   if (!library[str[i]]){
//     library[str[i]]=1;
//   } else {
//     library[str[i]]+=1;
//   }
// }
// for (let i=0; i<str.length; i++){
//   if (library[str[i]]===1){
//     return str[i];
//   }
// }
// return -1;

// time complexity: O(n^2) -> quadratic
// const counts = [];
// for (let i=0; i<str.length; i++){
//   let found = counts.find(count => count['letter']===str[i])
//   if (found){
//     found['count']+=1;
//   } else {
//     let newCount = {
//       letter: str[i],
//       count: 1
//     }
//     counts.push(newCount)
//   }
// }
// return counts.find(count => count['count']===1)['letter']

// console.log(firstNonrepeatingChar('')) // -> 'A'
// console.log(firstNonrepeatingChar('ABCDBIRDUP')) // -> 'sorry'
// console.log(firstNonrepeatingChar('XXXX')) // -> 'sorry'
// console.log(firstNonrepeatingChar('ALABAMA')) // -> 'L'
// console.log(firstNonrepeatingChar('BABA')) // -> 'sorry'
// console.log(firstNonrepeatingChar('AabCC')) // -> 'A'
