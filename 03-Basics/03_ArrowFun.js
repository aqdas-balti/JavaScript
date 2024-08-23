
const user={
    userName:"Aqdas",
    price:999,
    wellcomeMessage :function(){
        console.log(`${this.userName}, WellCome To Website`);
        console.log(this); //Nothing print 
    }  
}
// console.log(this);//{} because of node environment

// user.welcomeMessage();//console.log(this);
// //(This) is the context of a function
// user.userName = "Ali";
// user.welcomeMessage()//console.log(this);

//We can use our context (this) is only in the object not in the function that's why it will display [undefined]
//const chai = function (){} another method to declare the function
// function chai(){
//     let userName="BOB"
//     console.log(this.userName);
    
// }
// chai();//undefined

//Arrow Function can we do it in it?
// const chai =  () =>{
//     let userName="BOB"
//     console.log(this.userName);
// }
// chai();//undefined ans will be same

//Explicit return of arrow function
// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(addTwo(2,4));//6

//Implicit return of the arrow function

// const addTwo=(num1,num2)=> num1+num2;
//when we use curly braces the writing the return keyword is mandatory but when we use the parenthesis the it will not mandatory
// const addTwo=(num1,num2)=> (num1+num2);
//     console.log(addTwo(2,4));//6

const addTwo=(num1,num2)=> ({userName:"Ali"});//{ userName: 'Ali'}
    console.log(addTwo(2,4));//6

const myArray = [1,2,3,4,5,6];  
// myArray.forEach (function (){}) // Correct Sentence  simple 
// myArray.forEach (()=>{});//Arrow function syntax
