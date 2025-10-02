// //Arrays_5.js

// how is concat different from push ?
// in push , second element is a number.
// in concat , second element is an array.


// //concat in array.
// const firstArray = [1,2,3,4];
// const secondArray = [5,6,7,8];
// //we need to merge this together.
// console.log(firstArray.concat(secondArray));

// /*
// PS G:\1_javascript\1.3 Basic JavaScript APIs> node .\Arrays_5.js
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]
// PS G:\1_javascript\1.3 Basic JavaScript APIs> 
// */




//Method 2 : 

const initialArray = [9,10,11,12];
const secondaryArray = [13,14,15,16];

const finalArray = initialArray.concat(secondaryArray);

console.log(finalArray);


/*
PS G:\1_javascript\1.3 Basic JavaScript APIs> node Arrays_5.js
[
   9, 10, 11, 12,
  13, 14, 15, 16
]
PS G:\1_javascript\1.3 Basic JavaScript APIs>
*/


