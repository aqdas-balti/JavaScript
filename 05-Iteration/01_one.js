// For Loop
for (let index = 0; index <4; index++) {
    // const element = index;
    // console.log(element);
    // console.log(index);

    //ctrl+D to select the same variables for changing variables name
}
//In For Loop if is adding
for (let i = 0; i <=5; i++) {
    if (i==1) {
        console.log("1 Is The Best Number.");       
    }
    console.log(i);    
}

//For Loop with in for loop is nested for loop
for (let i = 0; i <=5; i++) {
    console.log(`Outer Loop Value Is ${i}`);
    console.log();
    for (let j = 0; j <=5; j++) {
        console.log(`Inner Loop Value of j is ${j} and Inner Loop of i is ${i}`);
        console.log(i+' * '+j+' = '+i*j);
               
    }    
}
//For Loop with Array
let myArray = ["Aqdas","Anwar","Abdullah","Furqan","Irfan"]
console.log("Total Length of myArray is ",myArray.length);//5
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);      
}

//break and continue keywords 
//Break: When we use break keyword then the console will jump outer side of a loop from present continuing loop like below.
console.log("Break Keyword");

for (let i = 1; i <=10; i++) {
    if (i==5) {
        console.log("5 is Detected");
        break;
    }
    console.log(`The Value of i is ${i}`); //When 5 is appear then the console will bounce back from the loop
}
//Continue: When we use continue then the first time checking of that particular value will be neglect and continue to printing the other values of a loop like
console.log("Continue Keyword");
for (let i = 1; i <=10; i++) {
    if (i==5) {
        console.log("5 is Detected");
        continue;
    }
    console.log(`The Value of i is ${i}`); //When 5 is appear then the console will be continue except printing the particular condition
}