// Write a program to print the biggest number in an array.
const array = [40,10,23,27,54,77,93,19,73];
let biggestNumber = array[0];
for(let i=1;i<array.length;i++){
    if(array[i]>biggestNumber){
        biggestNumber = array[i];
    }
}
console.log( "Biggest number among the elements of array is : " + biggestNumber);

/*
PS G:\1_javascript\arrays> node array_3.js
Biggest number among the elements of array is : 93
PS G:\1_javascript\arrays> 
*/