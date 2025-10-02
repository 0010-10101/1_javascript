//callbacks_1.js
function log1(){
    console.log("Hello world 1");
}
function log2(){
    console.log("Hello world 2");
}
function logWhatsPresent(fn){
    fn();
}
logWhatsPresent(log2);


/*
PS G:\1_javascript\1.3 Basic JavaScript APIs> node Callbacks_1.js
Hello world 2
PS G:\1_javascript\1.3 Basic JavaScript APIs>
*/
