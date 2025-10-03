//Json_2.js
// Converting the data into a string.
const users = '{name: "sahil" , age : 23, gender: "male}'       //here converting object into string.

// It still looks like an object , but it's actually a string.

// So we can't perform below line of code-> 

    // console.log(users["name"]);

//Correct way: 
console.log(users["0"]);    // In this case it prints the opening curly brace.
// here we can't really index the users["name"]

// '{name: "sahil" , age : 23, gender: "male}' is a string, no longer an object.

/*Output: 

PS G:\1_javascript\1.3 Basic JavaScript APIs\Level_2> node .\Json_2.js
{
PS G:\1_javascript\1.3 Basic JavaScript APIs\Level_2>
*/