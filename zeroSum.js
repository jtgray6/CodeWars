// Given an array of numbers (you can assume it will only contain numbers or be empty), return true if any two numbers add up to zero when summed together and false if no numbers will result in zero.

// Challenge: see if you can solve it with linear time complexity after your initial solution (which will most likely be quadratic); if you get linear on the first round then good job!

function zeroSum(nums){
    if (nums.length >= 2){
      for (let i=0; i<nums.length-1; i++){
        for (let j=1; j<nums.length; j++){
          if (nums[i]+nums[j]===0){
            return true
          }
        }
      }
      return false
    } else {
      return false
    }
  }
  
  console.log(zeroSum([1, 3, 2, -3])); // true
  console.log(zeroSum([5, 7, 2, 9])); // false
  console.log(zeroSum([0, 1, 0, 1, 0])); // true
  console.log(zeroSum([0])); // false
  console.log(zeroSum([6, 7, 9, -4, 0, 5, -7])); // true