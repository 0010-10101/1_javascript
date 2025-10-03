//Json_4.js

// Using the JSON.stringify method here.
const user = {
    name : "sahil",
    gender : "male"
}
const finalString = JSON.stringify(user);//this line converts object into a string.
console.log(finalString);


// console.log(finalString["name"]);  // This will print undefined on the screen / show error.
// we can use user["name"] -> this will print sahil on the screen.


/*
PS G:\1_javascript\1.3 Basic JavaScript APIs\Level_2> node Json_4.js
{"name":"sahil","gender":"male"}
PS G:\1_javascript\1.3 Basic JavaScript APIs\Level_2> 
*/