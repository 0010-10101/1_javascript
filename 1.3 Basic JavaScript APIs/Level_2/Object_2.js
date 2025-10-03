//Object_2.js
function objectMethods (obj){
    let keys = Object.keys(obj);
    console.log("After object keys: ", keys);
}
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);


/*
After object keys:  [ 'key1', 'key2', 'key3' ]
*/

