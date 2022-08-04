const fibonacci = function(num) {
    num = Number(num);
    if (num < 0){
        return 'OOPS';
    }
    if (num === 0 ){
        return 0;
    }
    if (num === 1){
        return 1;
    }
    let first = 0;
    let second = 1;
    let total = 0;

    for(let i = 2; i < num+1; i++){
        total = first + second;
        let temp = first;
        first = second;
        second = total;
    }

    return total;


};

// Do not edit below this line
module.exports = fibonacci;
