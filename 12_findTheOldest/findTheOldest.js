const findTheOldest = function(people) {
    function getAge(birthYear, deathYear) {
        if(!deathYear) deathYear = new Date().getFullYear();
        return deathYear - birthYear;
    }
    return people.reduce((oldest, person) => {
        const personAge = getAge(person.yearOfBirth, person.yearOfDeath);
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        return personAge > oldestAge ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
