//Understanding the metadata concept.
const user = {
    name : "sam",
    age : 21,
    address : {
        housenumber: 11,
        street : 1
    }       
}
console.log(user["address"]["housenumber"]);


//below line of code is the explaination of the code written above.
// const address = user["address"];
// const housenumber = address["housenumber"];