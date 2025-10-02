//Classes_3.js

class Animal {
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    speak(){
        console.log("Hi there " + this.speaks);
    }
}



let dog = new Animal ("Tommy", 4, "bhow bhow");     //create objects
let cat = new Animal ( "Millie", 4, "meow");

cat.speak();        //call function on a object.



/*PS G:\1_javascript\1.3 Basic JavaScript APIs\Level_2> node Classes_3.js
Hi theremeow
PS G:\1_javascript\1.3 Basic JavaScript APIs\Level_2>*/