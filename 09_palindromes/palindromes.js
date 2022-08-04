function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
}
const palindromes = function (string1) {
    let arr = Array.from((string1), x => x.toLowerCase());
    let noPunc = arr.filter(letter => isLetter(letter));
    let halfLength = Math.floor(noPunc.length/2);
    let firstHalf  = noPunc.slice(0,halfLength);
    let secondHalf = noPunc.slice(noPunc.length-halfLength,noPunc.length)
    secondHalf = secondHalf.reverse();
    firstHalf = firstHalf.join('');
    secondHalf = secondHalf.join('');
    return firstHalf === secondHalf;
};

// Do not edit below this line
module.exports = palindromes;
