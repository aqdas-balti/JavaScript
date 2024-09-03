//foreach loop in array
const coding = ["JS","PY","CPP","RB"];
console.log("Printed the items with  function call");
coding.forEach( function (items){
    // console.log(items); //JS PY CPP RB will be print 
})
//Use arrow function in the foreach loop
console.log("Printed the items with arrow function call");
coding.forEach ( (values) => {
    // console.log(values);//JS PY CPP RB will be print 
})
//Use function as a reference like
console.log("Print the values with reference function");
function printMe(ref){
    // console.log(ref);
}
coding.forEach( printMe );//JS PY CPP RB will be print

//we can also see the value, index and also full array values
coding.forEach( (val,index,arr)=>{
    console.log(val,index,arr);
})