//callbacks_4.js
function calculateArithmetic(a,b,arithmeticFinalFunction){
    const answer = arithmeticFinalFunction(a,b);
    return answer;
}
function sum(a,b){
    return a+b;
}
const value = calculateArithmetic(2,3,sum);
console.log(value);


/*PS G:\1_javascript\4_callbacks> node callbacks_4.js
5
PS G:\1_javascript\4_callbacks>  */