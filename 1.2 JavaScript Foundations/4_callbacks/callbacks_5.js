//callbacks_5.js
//set Timeout.

function greet(){
    console.log("hello world.");
}


function greetAlien(){
    console.log("Hello Alien");
}
setTimeout(greetAlien, 3*1000);




//below output prints the hello world statement after 3 seconds in this case.

/*
PS G:\1_javascript\4_callbacks> node callbacks_5.js
hello world.
PS G:\1_javascript\4_callbacks> 
*/