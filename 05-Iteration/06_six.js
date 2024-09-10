
const coding = ["JS","PY","CPP","RB"];
const values= coding.forEach ( (item)=>{
    console.log(item); 
})
console.log(values);//forEach loop will not return anything(undefined)

const myNums = [1,2,3,4,5,6,7,8,9,10];
let newNum=myNums.filter( (nums)=> nums>4);
console.log(newNum);//filter will return back anything

// Scopes scenario in filter function
let newNums=myNums.filter( (num)=> {
    return num>0;
});
console.log(newNums);



//using forEach loop use it
//Simple
myNums.forEach((num)=>{
    console.log(num); 
})
//Advanced
const forEachNum = [];
myNums .forEach ((num)=> {
    if (num>4) {
        forEachNum.push(num);
    }
})
console.log(forEachNum);




