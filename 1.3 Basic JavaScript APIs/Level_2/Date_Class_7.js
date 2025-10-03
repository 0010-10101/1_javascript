//Date_Class_7.js
//Printing current time after a interval of 1 second.
function printCurrentTime(){
    console.log(new Date().getTime());
}
setInterval(printCurrentTime, 1000);



//This prints very ugly stopwatch in the epoch time.
// try print a prettier thing like 7:43 am. Figure this out.
/*

PS G:\1_javascript\1.3 Basic JavaScript APIs\Level_2> node .\Date_Class_7.js
1759457514394
1759457515407
1759457516420
1759457517425
1759457518431
1759457519438
1759457520442
PS G:\1_javascript\1.3 Basic JavaScript APIs\Level_2> 

*/