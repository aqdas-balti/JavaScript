//Immediately Invoke Function Expression  (IIFE)

//simple function syntax without iife
// function iife(){
//     console.log("DB Connected");
    
// }
// iife()//DB Connected

//The Difference btw iife and simple function is in the simple function the code will be executed globally and it might be possible that the garbage things like variable and other things are pick up but in the iife this problem is not present in it.

//iife function syntax in this case terminator is mandatory
//This is Named iife function
(function iife(){
    console.log("DB Connected");
    
})();//DB Connection

//Arrow function with iife
//Without named iife function
(()=> {
    console.log("BD Connected Two");
    
})();//BD Connected Two

//Parametric arrow function with iife
//Without named iife parametric function 
((name)=> {
    console.log("BD Connected",`${name}`);
    
})('Aqdas-Ali');//BD Connected Two