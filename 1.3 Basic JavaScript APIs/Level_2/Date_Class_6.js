//Date_Class_6.js

function CalculateSum(){
    let a = 0;
    for (let i=0;i<100000000;i++){
        a = a + i;
    }
    return a;
}
const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();

CalculateSum();

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log(afterTimeInMs - beforeTimeInMs);

// It gives answer in milliseconds.

/*
PS G:\1_javascript\1.3 Basic JavaScript APIs\Level_2> node .\Date_Class_6.js
120
PS G:\1_javascript\1.3 Basic JavaScript APIs\Level_2> 
*/