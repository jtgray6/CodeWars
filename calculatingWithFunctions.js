// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(operator) {
    const value = 0;
    return orderConditional(value, operator);
}
function one(operator) {
    const value = 1;
    return orderConditional(value, operator);
}
function two(operator) {
    const value = 2;
    return orderConditional(value, operator);
}
function three(operator) {
    const value = 3;
    return orderConditional(value, operator);
}
function four(operator) {
    const value = 4;
    return orderConditional(value, operator);
}
function five(operator) {
    const value = 5;
    return orderConditional(value, operator);
}
function six(operator) {
    const value = 6;
    return orderConditional(value, operator);
}
function seven(operator) {
    const value = 7;
    return orderConditional(value, operator);
}
function eight(operator) {
    const value = 8;
    return orderConditional(value, operator);
}
function nine(operator) {
    const value = 9;
    return orderConditional(value, operator);
}

function orderConditional(value, operator) {
    if (operator){
        return Math.floor(eval(`${value}`+operator))
    }
    return value
}

function plus(number) {
    return `+${number}`
}
function minus(number) {
    return `-${number}`  
}
function times(number) {
    return `*${number}`
}
function dividedBy(number) {
    return `/${number}`
}

//best solution from codewars:

// var n = function(digit) {
//     return function(op) {
//       return op ? op(digit) : digit;
//     }
//   };
//   var zero = n(0);
//   var one = n(1);
//   var two = n(2);
//   var three = n(3);
//   var four = n(4);
//   var five = n(5);
//   var six = n(6);
//   var seven = n(7);
//   var eight = n(8);
//   var nine = n(9);
  
//   function plus(r) { return function(l) { return l + r; }; }
//   function minus(r) { return function(l) { return l - r; }; }
//   function times(r) { return function(l) { return l * r; }; }
//   function dividedBy(r) { return function(l) { return l / r; }; }