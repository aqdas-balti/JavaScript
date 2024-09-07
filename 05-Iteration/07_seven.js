
const myNums = [ 1,2,3,4,5,6,7,8,9,10];
//Now We are using map 
//map will return back anything like filter
//map using without scope
console.log("Map Using without Scope");
let newNums=myNums.map((num)=>num+10);
console.log(newNums);
//map using with scopes
console.log("Map Using with Scope");
const newNums2=myNums.map((num2)=>{return num2+10});
console.log(newNums2);
console.log("Print array Using ForEach Loop");
myNums.forEach( (num)=>{
    // num+10;
    // console.log(num+10);        
})
//Now we use chaining or use two to tree methods at one place
console.log("Chaining Methods");
const chainingNums = [1,2,3,4,5,6,7,8,9.10];
const newchainingNums = chainingNums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40);
console.log(newchainingNums);

