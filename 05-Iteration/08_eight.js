//Reduce method
const myNums = [1,2,3];
//using Function Simple syntax
console.log("Reduce Method Using with Simple Function Method");
const newNums = myNums.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval} Total = ${acc+currval}`);
    return acc+currval;
},0)
console.log(newNums);//6

console.log("Reduce Method Using with Arrow Function Method");
const arrowNums = myNums.reduce((acc,currval)=>acc+currval,0);
console.log(arrowNums);//6

console.log("Shopping Cards Example With Reduce Method");
const shoppingCards =[
    {
        course1:"JavaScript",
        price: 2000
    },
    {
        course2:"Python",
        price:3000
    },
    {
        course3:"Django",
        price:4000
    }
]
// const userPurchased = shoppingCards.reduce((arr,items)=>arr+items.price,0);
 const userPurchased = shoppingCards.reduce(function (acc,items){
    return acc+items.price;
},0);

console.log(userPurchased);//9000