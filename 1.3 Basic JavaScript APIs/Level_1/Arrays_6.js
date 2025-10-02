//Arrays_6.js 

// Understanding .forEach()


//for understanding different methods to print / access the array.
// const initialArray = [1,2,3];
// for(let i=0;i<initialArray.length;i++){
//     console.log(initialArray[i]);
// }

/*PS G:\1_javascript\1.3 Basic JavaScript APIs> node Arrays_6.js
1
2
3
PS G:\1_javascript\1.3 Basic JavaScript APIs>*/








// Method 2 to access this array.
//using forEach() method.
const initialArray = [1,2,3];
function logThing(str){
    console.log(str + " is a string.");
}
initialArray.forEach(logThing);
//callbacks concept is applied here.