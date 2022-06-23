const reverseString = function(stringRev) {
    let finalString = [];
    let stringArr = stringRev.split("");
    for (let i = stringArr.length-1;i > -1; i--){
        finalString.push(stringArr[i]);
    }
    return finalString.join("");
};
//try making the string an array then put it back to front in a new array.
// Do not edit below this line
module.exports = reverseString;
