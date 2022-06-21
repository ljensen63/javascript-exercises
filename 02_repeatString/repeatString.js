const repeatString = function(stringRepeat, num) {
    let finalString = '';
    if(num < 0){
        return 'ERROR';
    }
    for (let i = 0; i < num; i++){
        finalString += stringRepeat;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
