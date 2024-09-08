//For of Loop
//["","",""]
//[{},{},{}]
//Array With Normal Integers
let arr = [1,2,3,4,5]
for (const value of arr) {
    // console.log(value);//1 to 5 Prints
}

//Array With Strings
let arr2 = ["Aqdas","Anwar","Abdullah","Furqan","Irfan"];
for (const val2 of arr2) {
    // console.log(val2);
}

let greetings = "Hello World!"
for (const greet of greetings) {
    if (greet==" ") {//This will neglect the space of the array
        continue
    }
    // console.log(`Each Char is ${greet}`);
}

//Maps
const map = new Map();
map.set('PK','Pakistan');
map.set('IR','Iran');
map.set('IN','India');
map.set('IRQ','Iraq');
// console.log(map);

for (const key of map) {
    // console.log(key);//It will display the result with in array to avoid we use below
}
/*Ans:
['PK', 'Pakistan']
['IR', 'Iran']
['IN', 'India']
['IRQ', 'Iraq'] */

for (const [key,value] of map) {
    // console.log(key,":-",value);//It will display the result with separate
/*Ans:
PK :- Pakistan
IR :- Iran
IN :- India
IRQ :- Iraq */
}
//Check the usage of forof loop in the object
const myObject={
    JS : "Javascript",
    CPP: "C++",
    PY: "Python",
    RB: "Ruby"
}
for (const key of myObject) {
    // console.log(key);
    
}
//myObject is not iterable at object / <anonymous>