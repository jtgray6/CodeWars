// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = '';
    let slices = [];
    const shortestStrLength = Math.min(...strs.map(str => str.length));
    let sliceIndex = 0;
    while (sliceIndex < shortestStrLength+1){
      strs.forEach(str => {
        slices.push(str.slice(0,sliceIndex))
      });
      let firstSlice = slices[0];
      for (let i=1; i<slices.length; i++){
        console.log(slices)
        if (slices[i] !== firstSlice){
          return prefix;
        };
      };
      prefix=slices[0];
      slices=[];
      sliceIndex+=1;
    }
    return prefix;
  };
  
  longestCommonPrefix(["flower","flow","flowing"]) // -> "flow"
  // longestCommonPrefix(["dog","racecar","car"])
  // Input: ["flower","flow","flight"]
  // Output: "fl"
  
  // Input: ["dog","racecar","car"]
  // Output: ""
  
  // Maggie's solution 
  
  // var longestCommonPrefix = function(strs) {
  //     let prefix = '';
  //     const first = strs[0];
  //     let curr = 1;
  //     if (first) {
  //      for (let i = 0; i < first.length; i++) {
  //         prefix = first.slice(0, curr);
  //         for (let j = 0; j < strs.length; j++) {
  //             if (strs[j][curr - 1] !== prefix[curr - 1]) {
  //                 return prefix.slice(0, prefix.length - 1);
  //             }
  //             if (j === strs.length - 1) {
  //                 curr += 1;
  //             }
  //         }
  //       }   
  //     }