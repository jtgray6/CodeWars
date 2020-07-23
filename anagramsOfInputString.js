// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.

function anagrams(word, words) {
    const finalArray = []
    const sortedWord = sortString(word)
    words.forEach(word => {
        let sortedArrWord = sortString(word)
        sortedWord == sortedArrWord ? finalArray.push(word) : null
    })
    return finalArray

}

function sortString(string){
    return [...string].sort().join('')
}

anagrams('test', ['ttss', 'estt', 'stet', 'esst'])

// Best Solution

// function anagrams(word, words) {
//     word = word.split('').sort().join('');
//     return words.filter(function(v) {return word == v.split('').sort().join('');});
// }