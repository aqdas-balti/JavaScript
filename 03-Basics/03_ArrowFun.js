
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

function chai(){
    console.log(this);
    
}
chai();