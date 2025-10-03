//Object_5.js
// Object.hasOwnProperty();

function objectMethods(obj) {

  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);

}
let obj = {
    name:"sahil"
}
console.log(obj.hasOwnProperty("name"));
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);


/*
true
After hasOwnProperty(): false
*/