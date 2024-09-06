const Books =[
    {title : "Maths", genre : "Fiction", publish : "1990", edition :"2000"},
    {title : "Physics", genre : "History", publish : "1995", edition :"2005"},
    {title : "Chemistry", genre : "Fiction", publish : "2000", edition :"2010"},
    {title : "Biology", genre : "History", publish : "2005", edition :"2015"},
    {title : "Computer", genre : "Programming", publish : "2010", edition :"2020"},
]
let myBooks = Books.filter((bk)=>bk.genre==="History");
console.log(myBooks);

myBooks = Books.filter((bk)=>{return bk.edition==="2015";})
console.log(myBooks);

myBooks = Books.filter((bk)=>bk.genre==="History"&&bk.edition>=2000);