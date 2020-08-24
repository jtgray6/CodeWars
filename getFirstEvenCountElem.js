// Even Occurrence
// [1, 3, 3, 4, 2, 4, 4, 2, 5] > 2
// ['cat', 'dog', 'dig', 'cat'] > 'cat'
// ['meow', 2, 1, 'meow'] > 'meow'
// [true, false] > null
// [1,3,1,3] > 1
// [1,2,2,1] > 1
// [] > 1

//pseudocode:
//loop through elements in input array
//create an empty elemCounts array
//for each element in input array, check if exists in elemCounts array,
//if it does, increase the count by 1
//otherwise, add it as object with value equal to the element and a count of 1
//push this object into elemCounts array
//loop through elemCounts to find where elemCounts[element][count] % 2 === 0 (first count that is even)
//return the value of that element

const getFirstEvenCountElem = (arr) => {
    const elemCounts = []; //will contain {}(s) as elements with keys of value and count

    arr.forEach((elem, i) => {
        if (elemCounts.find(element => {
          return element['value']===elem;
        })) {
          const currCount = elemCounts.find(element => {
            return element['value']===elem;
          });
          currCount['count']+=1;
        } else {
          const countObj = {
            value: elem,
            count: 1
          };
          elemCounts.push(countObj);
        };       
    });

    const evenCountElem = elemCounts.find(elemCount => {
        return elemCount['count']%2===0;
    });

    return evenCountElem['value'];
}

getFirstEvenCountElem([1, 3, 3, 3, 4, 2, 4, 4, 2, 5]);