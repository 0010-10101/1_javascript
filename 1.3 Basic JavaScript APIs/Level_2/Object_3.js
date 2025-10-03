//Object_3.js

//for printing the values from the object.

function objectMethods (obj){
    let values = Object.values(obj);
    console.log("After object values : ", values);
}
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);

/*
After object values :  [ 'value1', 'value2', 'value3' ]
*/