
const myNums = [ 1,2,3,4,5,6,7,8,9,10];
//Now We are using map 
//map will return back anything like filter
//map using without scope
let newNums=myNums.map((num)=>num+10);
console.log(newNums);
//map using with scopes
const newNums2=myNums.map((num2)=>{return num2+10});
console.log(newNums2);
