// Longest run: Given a string, return a tuple containing the indices of the longest run of a single character

function longestRun (str){
    //if length of str is less than or equal to one, return [0,0]
    if (str.length <= 1){
      return [0,0]
    }
    //runs array[{}] -> {} has keys: char, count, start, end
    const runs = [];
    //for loop through str, each char check if last element in runs has a char value equal to char
    for (let i=0; i<str.length; i++){
      //if does not have current char, create obj with keys of: char: currentChar, start: index, end: index, count: 1
      if (runs.length>0){
        if (runs[runs.length-1]['char']!==str[i]){
          const charObj = {
            char: str[i],
            start: i,
            end: i,
            count: 1
          };
          runs.push(charObj);
        } else {
          //if does have char, for last element of runs, increment end and count
          runs[runs.length-1]['end']+=1;
          runs[runs.length-1]['count']+=1;
        }
      } else {
        const charObj = {
          char: str[i],
          start: i,
          end: i,
          count: 1
        };
        runs.push(charObj);
      }
    }
    //map over runs to create counts array -> find max of counts and set equal to a const
    const maxCount = Math.max(...runs.map(run => run.count));
    //found variable equal to find loop on runs array where count = maxValue
    const result = runs.find(run => run.count === maxCount);
    //return [found.start, found.end]
    return [result.start, result.end]
  };
  
  console.log(`Test1: expected [1,3] and got [${longestRun('abbbcc')}]`);
  console.log(`Test2: expected [0,1] and got [${longestRun('aabbc')}]`);
  console.log(`Test3: expected [0,0] and got [${longestRun('')}]`);
  console.log(`Test4: expected [2,3] and got [${longestRun('mississippi')}]`);
  console.log(`Test5: expected [0,0] and got [${longestRun('abcdefgh')}]`);
  console.log(`Test6: expected [2,8] and got [${longestRun('abccccccc')}]`);