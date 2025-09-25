// //write a program that prints all the male people's first name given a complex object.
// we create array of objects.
const allUsers = [{
    firstName : "sam",
    gender : "male"
},{
    firstName : "tim",
    gender : "male"
},{
    firstName : "pooja",
    gender : "female"
},{
    firstName : "malhar",
    gender : "male"
}]

for(let i=0;i<allUsers.length;i++){
    if(allUsers[i]["gender"] == "male"){
        console.log(allUsers[i]["firstName"]);
    } 
}


/*
PS G:\1_javascript\objects> node objects_3.js
sam
tim
malhar
PS G:\1_javascript\objects> 
*/