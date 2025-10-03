// Object_6.js
// Object.assign();

//This basically let's use shove more things inside an object.
const obj = {
    key1 : "value1",
    key2 : "value2",
    key3 : "value3",
};

let newObj = Object.assign({}, obj, {newProperty: "newValue"});
// This is the syntax of Object.assign ie it contains {} in starting 
// along with , object and nedw Property. 


console.log("After Object.assign():",newObj);



/*Output: 

After Object.assign(): {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  newProperty: 'newValue'
}

*/