function ageYears(person){
    let lastDay = 0;
        if('yearOfDeath' in person){
            lastDay = person.yearOfDeath;
        }else {
            let today = new Date();
            lastDay = today.getFullYear();
        }
        return lastDay - person.yearOfBirth;
}

const findTheOldest = function(peopleArray) {
    let addAge = peopleArray.map(person => {
        return {...person, age: ageYears(person)}
    });
    addAge = addAge.sort(function(a,b){
        return a.age - b.age;
    });
    return addAge[addAge.length-1];   
};

// Do not edit below this line
module.exports = findTheOldest;
