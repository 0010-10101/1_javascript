// Object_4.js

// Creating entries of the object

function objectMethods(obj){
    let entries = Object.entries(obj);
    console.log("After Object.entries",entries);
}
const sampleObject = {
    key1 : "value1",
    key2: "value2",
    key3: "value3",
};
objectMethods(sampleObject);

// This is a tricky one.
// Object.entries is an array, which every element there is another array.
// Array consisting of multiple arrays.-> check output.



/*
PS G:\1_javascript\1.3 Basic JavaScript APIs\Level_2> node Object_4.js
After Object.entries [ [ 'key1', 'value1' ], [ 'key2', 'value2' ], [ 'key3', 'value3' ] ]
PS G:\1_javascript\1.3 Basic JavaScript APIs\Level_2> 
*/
