//While Loop
//Simple While Loop
let index = 0;
while (index<=10) {
    console.log(`The Value of Index is: ${index}`);
    index=index+2;
}
//While with Array
let myArray = ["Aqdas","Anwar","Abdullah","Furqan","Irfan"];
let arr=0;
console.log("Total Length of myArray is ",myArray.length);//5
while (arr<myArray.length) {
    console.log(`The value of myArray is: ${myArray[arr]}`);  
    arr=arr+1; 
}

//Do While Loop first print statement then check the condition
//Simple Do While Loop
let score = 1;
do {
    console.log(`The value of score is: ${score}`);
    score++;
} while (score<=10);
//Do While with Array
let myArray2=["Aqdas","Anwar","Abdullah","Furqan","Irfan"];
let arr2 =1;
do {
    console.log(`The value of myArray2 is : ${myArray2[arr2]}`);
    arr2=arr2+1;
} while (arr2<myArray2.length);