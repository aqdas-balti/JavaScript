//Immediately Invoke Function Expression  (IIFE)

//simple function syntax without iife
// function iife(){
//     console.log("DB Connection");
    
// }
// iife()//DB Connection

//The Difference btw iife and simple function is in the simple function the code will be executed globally and it might be possible that the garbage things like variable and other things are pick up but in the iife this problem is not present in it.

//iife function syntax
(function iife(){
    console.log("DB Connection");
    
})()//DB Connection