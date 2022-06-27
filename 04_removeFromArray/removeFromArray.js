const removeFromArray = function(arr, ...removeThese) {
    console.log(arr.join(""));
    console.log(removeThese.join(""));
    for(let i = 0; i < removeThese.length;i++){
        for(let j = arr.length; j > -1; j--){
            if(arr[j] === removeThese[i]){
                arr.splice(j,1);
            }

        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
