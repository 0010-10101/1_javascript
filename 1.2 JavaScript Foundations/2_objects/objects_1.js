//write a program that prints all the male people's first name given a complex object.
// Program using arrays.
const personArray = ["Sam", "Tim","Priya","Malhar","Diptika"];
const genderArray = ["Male","Male","Female","Male","Female"];
const numberofUsers = personArray.length;
for(let i=0;i<numberofUsers;i++){
    if(genderArray[i] == "Male"){
        console.log(personArray[i]);
    }
}



/*
PS G:\1_javascript\objects> node objects_1.js
Sam
Tim
PS G:\1_javascript\objects> 
*/