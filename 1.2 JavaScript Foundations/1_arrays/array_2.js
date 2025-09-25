//Write a programm that prints all the even numbers in an array.
const ages= [21,22,45,56,88,2,12,11,19,54,23,24,25];
const numberofPeople = ages.length;
for(let i=0;i<numberofPeople;i++){
    if(ages[i] % 2 == 0){
        console.log(ages[i]);
    }
}