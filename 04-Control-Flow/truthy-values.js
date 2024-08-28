//Truthy values are the values that we assumed that it is true by default if some thing in the variables then it will display the true values
//Falsy Values if nothing in the variable then it will display the false values ans

let Email = "aqdasali584@gmail.com"//This is truthy value and it will print the if value
if (Email) {
    console.log("Yes email is declared");
}else{
    console.log("No email is not declare");   
}

console.log("Email2 is starts from here");

let Email2 = ""//This is falsy values and it will print the else value
if (Email2) {
    console.log("Yes email is declared");
}else{
    console.log("No email is not declare");   
}

//Falsy Values are: false, 0, -0, "", BigInt 0n, undefined, NaN.
//Truthy Values are: " ", "0", "-0", [], {}, function(){}

//For checking
if (Email2.length==0) {
    console.log("Array is Empty");
}

//Object Checking
let EmptyObj={};
if (Object.keys(EmptyObj).length==0) {
    console.log("Object is Empty");   
}