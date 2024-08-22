
const user={
    userName:"Aqdas",
    price:999,
    wellcomeMessage :function(){
        console.log(`${this.userName}, WellCome To Website`);
        console.log(this); //Nothing print 
    }  
}
// console.log(this);//{} because of node environment

// user.wellcomeMessage();//console.log(this);
// //(This) is the context of a function
// user.userName = "Ali";
// user.wellcomeMessage()//console.log(this);

//We can use our context (this) is only in the object not in the function thts why it will display [undefined]
//const chai = function (){} another method to delclare the function
// function chai(){
//     let userName="BOB"
//     console.log(this.userName);
    
// }
// chai();//undefined

//Arroe Function can we do it in it?
// const chai =  () =>{
//     let userName="BOB"
//     console.log(this.userName);
// }
// chai();//undefined ans will be same

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(addTwo(2,4));//6

//Implicit return of the arrow function

const addTwo=(num1,num2)=> num1+num2;
    console.log(addTwo(2,4));//6