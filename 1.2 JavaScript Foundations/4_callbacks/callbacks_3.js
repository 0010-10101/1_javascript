// Another example of callbacks.
function calculateArithmaetic(a,b,type){
    if(type == "sum"){
        return sum(a,b);
    }
    if(type == "minus"){
        return subtract(a,b);
    }
} 

function sum(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}

const value = calculateArithmaetic(23,10,"minus");
console.log(value);

/*
PS G:\1_javascript\4_callbacks> node callbacks_3.js
13
PS G:\1_javascript\4_callbacks> 
*/