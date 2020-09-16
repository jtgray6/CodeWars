// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

// Example:

// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

//time complexity O(n) -> linear

const fizzBuzz = (num) => {
//declare an empty result array
//loop num iterations and for each iteration:
// if remainder of iteration / 15 is zero, then set result[i]="FizzBuzz"
// if iteration modulus 5 is zero, then set result[i]="Buzz"
// if iteration modulus 3 is zero, then set result[i]="Fizz"
// else result[i]=`${i}`
//exits loop, return result
  const result = [];
  for (let i=1; i<=num; i++){
    if (i % 15 === 0){
      result[i-1]="FizzBuzz";
    } else if (i % 5 === 0){
      result[i-1]="Buzz";
    } else if (i % 3 === 0){
      result[i-1]="Fizz";
    } else {
      result[i-1]=`${i}`;
    }
  }
  return result;
}

console.log(fizzBuzz(0)); // []
console.log(fizzBuzz(45)); // []