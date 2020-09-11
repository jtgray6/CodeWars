//given an array of integers, return the largest product of any 3 of the integers

// [2, 1, 3, 7]
// [0, 2, 3]
// [-5, -1, -3, -2, -4]
// [-31, 41, 34, -37, -17, 29]
// 42
// 0
// -6
// 47027

function largestProdOf3(nums){
    //sort nums array largest to smallest (a,b)=> a-b
    //find product of first 3 elements -> opt1
    //find product of first element and last two elements -> opt2
    //compare opt1 and opt2 -> return which is greater
    nums.sort((a,b)=>b-a)
    const opt1 = nums[0]*nums[1]*nums[2];
    const opt2 = nums[0]*nums[nums.length-1]*nums[nums.length-2];
    return opt1 > opt2 ? opt1 : opt2
    //could use return Math.max(opt1,opt2)
  };
  
  console.log(largestProdOf3([2,1,3,7]));
  console.log(largestProdOf3([0, 2, 3]));
  console.log(largestProdOf3([-5, -1, -3, -2, -4]));
  console.log(largestProdOf3([-31, 41, 34, -37, -17, 29]));