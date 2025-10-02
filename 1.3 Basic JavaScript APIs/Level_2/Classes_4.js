//Classes_4.js

// Introducing new concept static methods.


class Animal {
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }


    //static methods
    static myType(){
        console.log("Animal");
    }
    // this method is not associated to any object, it is associated to class itself.


    speak(){
        console.log("Hi there " + this.speaks);
    }
}


console.log(Animal.myType());
// If we want to call something directly on the class , make it static method.


// console.log(Animal.speak());
//we can't do the above line it gives error i.e -> Animal.speak is not a function at Object.

let dog = new Animal ("Tommy", 4, "bhow bhow");     //create objects
let cat = new Animal ( "Millie", 4, "meow");

cat.speak();        //call function on a object.



