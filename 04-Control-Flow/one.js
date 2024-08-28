//If Statement
const isloggedIn = true;
if (isloggedIn){
    console.log("Logged In");
    
}

const temperature = 41;

if (temperature>40){
    console.log("Temperature is Grater Than 40");
    
}
else{
    console.log("Less Than 40");
    
}

const score = 100;
if (score>50){
    const power = "Fly";
    console.log(`User Power ${power}`);
    
}
// console.log(`User Power ${power}`);//Power is not defined because of scope theory

const balance =1000;
//single line implicit scope we can add multiple lines in implicit scope but that type of code is very bad way to write a code
//single line implicit scope
if (balance>50) console.log("Test 1");
//multiple line implicit scope
if (balance>50) console.log("Test M 1"),console.log("Test M 2");//This is very bad technique

//Nested if statements
if (balance<500) {
    console.log("Yes Balance Less is than 500 ");
} else if (balance<750){
    console.log("Yes Balance is Less than 750"); 
}else if (balance<999) {
    console.log("Yes Balance is Less than 999");
    
}else{
    console.log("Balance is not not grater than 1000");
    
}

//Daily lifr example cases of if statements
const userLoggedin = true;
const debitCard = true
if (userLoggedin&&debitCard) {//In AND (&&) case both the condition are mandatory to acquire true to access the code
    console.log("User can allow to shopping");   
}
let userLoggedinfromGoogle=false;
let userLoggedinfromEmail=true;
if (userLoggedinfromGoogle||userLoggedinfromEmail) {//This is OR (||) case if the one condition is true then it will generate true result
    console.log("Yes User Logged In !");
    
}