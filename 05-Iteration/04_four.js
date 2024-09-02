//use loop at objects
const myObject={
    JS : "Javascript",
    CPP: "C++",
    PY: "Python",
    RB: "Ruby"
}
for (const key in myObject) {
    console.log(key);
    
}
for (const key in myObject) {
    console.log(myObject[key]);
    
}
for (const key in myObject) {
    console.log(`${key} is for ${myObject[key]}`);
    
}

//Use forin loop in Arrays
const myArray = ["JS","PY","CPP","RB"];
for (const key in myArray) {
    // console.log(key);//In array the key values are the index no where the index starts, starts at 0 and so we can say that array keys are in numbers in this case 0 1 2 3
    console.log(myArray[key]);//Now JS PY CPP RB will be print
}
//use forin loop in maps
// const map = new Map();
// map.set('PK','Pakistan');
// map.set('IR','Iran');
// map.set('IN','India');
// map.set('IRQ','Iraq');
// for (const key in map) {
//     // console.log(key);//print nothing because of forin loop will not work with the map  
// }

