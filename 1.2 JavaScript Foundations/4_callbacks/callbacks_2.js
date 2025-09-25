// Understanding callbacks.
function Sum(num1, num2, funToCall){
    let result = num1 + num2;
    funToCall(result);
}
function displayResult(data){
    console.log("The result of the sum is: "+ data);
}
function displayResultPassive(data){
    console.log("Sum's result is:" + data);
}

const ans = Sum(2,3,displayResult);


/*
PS G:\1_javascript\4_callbacks> node callbacks_2.js
The result of the sum is: 5
PS G:\1_javascript\4_callbacks>
*/