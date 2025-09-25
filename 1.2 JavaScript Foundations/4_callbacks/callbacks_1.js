function sum(num1, num2){
    let result = num1 + num2;
    return result;
}
function displayResult(data){
    console.log("Result of the sum is : " + data);
}
function displayResultPassivve(data){
    console.log("Sum's result is: " + data);
}


// you are only allowed to call one function after this.
// How will you displayResult of a sum.


// Simple approach below.
const ans = sum(2,9);
displayResult(ans);
//note : we can only call a single function so this doesn't work for callback.
