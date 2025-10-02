//Classes_1.js
const dog = {
    name : "tommy",
    legCount : 4,
    speaks : "bhow bhow"
}
const cat = {
    name : "millie",
    legCount : 4,
    speaks : "meow"
}

function printStr(animal){
    console.log("The animal names is - " + animal["name"] + " has " + animal["legCount"] + " legs " + "and says " + animal["speaks"]);
}

printStr(dog);


/*PS G:\1_javascript\1.3 Basic JavaScript APIs\Level_2> node Classes_2.js
The animal names is - tommy has 4 legs and says bhow bhow
PS G:\1_javascript\1.3 Basic JavaScript APIs\Level_2> */

