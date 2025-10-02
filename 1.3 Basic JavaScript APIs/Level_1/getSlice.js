//getSlice.js
function getSlice(str, start, end){
    console.log("Original String:", str);
    console.log("After slice : ", str.slice(start,end));
}
getSlice("Hello World", 0, 8);

// this gives all the characters from the mentioned starting to end index.


// Note: output does not include the last index.

/*
Output: 
PS G:\1_javascript\1.3 Basic JavaScript APIs> node .\getSlice.js
Original String: Hello World
After slice :  Hello Wo
PS G:\1_javascript\1.3 Basic JavaScript APIs>
*/






// Solving without using function.

// const value = "this is a string to perform the operations on.";
// let answertolog =value.slice(0,13);
// console.log(answertolog);

// /* Output:
// PS G:\1_javascript\1.3 Basic JavaScript APIs> node .\getSlice.js
// this is a str
// PS G:\1_javascript\1.3 Basic JavaScript APIs> 
// */