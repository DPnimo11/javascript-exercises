const findTheOldest = function(people) {
    let ans = people[0];
    let max = 0;
    for (let person of people) {
        if ("yearOfDeath" in person) {
            if (person.yearOfDeath - person.yearOfBirth > max) {
                ans = person;
                max = person.yearOfDeath - person.yearOfBirth;
            }
        } else {
            if (2025 - person.yearOfBirth > max) {
                ans = person;
                max = 2025 - person.yearOfBirth;
            }
        }
    }
    return ans;
};

// Do not edit below this line
module.exports = findTheOldest;
