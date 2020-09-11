//given an array of zeros and ones, output longest run or streak of ones quantity

function longestOnesStreak (nums){
    //initalize streaks array = [] (empty)
    //loop through nums
    //if num is 0, push num into streaks
    //if num[i] === 1,
    //  if num[i-1]===1, num[i-1]+=1
    //  else push num into streaks
    if (nums.length<=0){
      return 0
    }
    const streakCounts = [];
    for (let i=0; i<nums.length; i++){
      if (nums[i]===0){
        streakCounts.push(nums[i])
      } else {
        if (streakCounts[streakCounts.length-1]>0){
          streakCounts[streakCounts.length-1]+=1
        } else {
          streakCounts.push(nums[i])
        }
      }
    }
    return Math.max(...streakCounts)
  }
  
  //examples:
  console.log(longestOnesStreak([0,1,1,1,0,1])) // -> 3
  console.log(longestOnesStreak([0,0])) // -> 0
  console.log(longestOnesStreak([1,0,1])) // -> 1
  console.log(longestOnesStreak([])) // -> 0  