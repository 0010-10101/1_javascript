//WritingOwnLogicofSubstring.js
// Writing the logic of substring and getSlice
function cutIt(str, startIndex, endIndex){
    let newString = "";
    for(let i=0;i<str.length;i++){
        if(i >= startIndex && i < endIndex){
            newString = newString + str[i];
        }
    }
    return newString;
}
const value = "Sahil Raju Thool";
let ans2 = value.slice(2,5);
console.log(ans2);

console.log("-----------------");

console.log(cutIt(value,2,5));


/*Output:
PS G:\1_javascript\1.3 Basic JavaScript APIs> node .\WritingOwnLogicofSubstring.js
hil
-----------------
hil
PS G:\1_javascript\1.3 Basic JavaScript APIs>
*/