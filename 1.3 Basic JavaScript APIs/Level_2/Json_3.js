//Json_3.js


const users = '{"name": "Sahil", "age": 23, "gender": "male"}'    //Here it contains key-value pair.
// in above line , add double quotes to both the key as well as value.

//JSON.parse
//JSON.stringify


const user = JSON.parse(users);
console.log(user["gender"]);


/*
PS G:\1_javascript\1.3 Basic JavaScript APIs\Level_2> node Json_3.js
male
PS G:\1_javascript\1.3 Basic JavaScript APIs\Level_2> 
*/