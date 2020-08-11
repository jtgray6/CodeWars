// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).

twoSum = (array, sum) => {
    const sumIndices = []
    for (let i=0; i<array.length; i++){
      for (let j=i+1; j<array.length; j++){
        if (array[i]+array[j]===sum){
          sumIndices.push(i)
          sumIndices.push(j)
        }    
      }
    }
    return sumIndices
  }


// function twoSum(numbers, target) {
//     for (var i = 0; i < numbers.length-1; i++) {
//         for (var j = i+1; j < numbers.length; j++) {
//             if (numbers[i] + numbers[j] === target) return [i, j];
//         }
//     }
// }