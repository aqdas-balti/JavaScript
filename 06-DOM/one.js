
//All of this work are done in the console of the window

/*document.getElementById('title').getAttribute('id')
'title'
document.getElementById('title').getAttribute('class')
'Heading'
document.getElementById('title').id
'title'
document.getElementById('title').className
'Heading'
document.getElementById('title').setAttribute('class','test')
undefined
document.getElementById('title').setAttribute('class','test heading')
undefined
document.getElementById('title').getAttribute('class')
'test heading'
document.getElementById('title').setAttribute('class','Heading')
undefined
title
<h1 id=​"title" class=​"Heading">​Dom Learning on chai aor code​</h1>​
title.style.backgroundColor='green'
'green'
title.style.borderTopLeftRadius="15px"
'15px'
document.getElementById('title')
const title = document.getElementById('title');

Now From Here Very Important Work Will Be Start To Add a New Content in the frontend
title.innerText
'Dom Learning on chai aor code'
title.textContent
'Dom Learning on chai aor code'
title.innerHTML
'Dom Learning on chai aor code'

title.innerHTML This will show also the tags of the html
'Dom Learning on chai aor code <span style="display: none;">This Is Span</span>'
title.innerText This will only show thw text
'Dom Learning on chai aor code'
title.textContent This will also show the hide things
'Dom Learning on chai aor code This Is Span'

document.getElementsByClassName('Heading')

HTMLCollection [h1#title.Heading, title: h1#title.Heading]
0: h1#title.Heading
title: h1#title.Heading
length: 1
[[Prototype]]: HTMLCollection

document.querySelector('h1')
<h1 id=​"title" class=​"Heading">​…​</h1>​
document.querySelector('h2')
<h2>​1: Lorem ipsum dolor sit amet.​</h2>​

Document.querySelector('#title')
<h1 id=​"title" class=​"Heading">​…​</h1>​
document.querySelector('.Heading')
<h1 id=​"title" class=​"Heading">​…​</h1>​

document.querySelector('input[type=password]')
<input type=​"password" name id>​

yaha pa ma har ul ki list ko alag alg coloe dena chahta hn querryselector ka through
document.querySelector('ul')
<ul>
<li>One</li>
<li>Two</li>
<li>Three</li>
</ul>
const myUl=document.querySelector('ul')
myUl.querySelector('li')
<li>One</li>
const firstLI = myUl.querySelector('li')
undefined//Done
firstLI

ul.querySelector('.first')
<li class=​"first">​…​</li>​::marker​"One"</li>​
let first = ul.querySelector('.first')
undefined
first
<li class=​"first">​…​</li>​
first.sty
undefined
first.style.backgroundColor='red'
'red'
let second = ul.querySelector('.second')
undefined
second.style.backgroundColor='green'
'green'
let third = ul.querySelector('.third')
undefined
third.style.backgroundColor='yellow'
'yellow'
ul.style.backgroundColor='pink'
'pink'

USING WITH SELECTQUERRYALL
NODELIST IS NOT AN ARRAY
document.querySelectorAll('li')
NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeList
let tempList=document.querySelectorAll('li')
undefined
tempList
NodeList(3) [li, li, li]
let arr=[1,2,3]

tempList.style.backgroundColor = 'green' //Generate error
VM4690:1 Uncaught TypeError: Cannot set properties of undefined (setting 'backgroundColor')
    at <anonymous>:1:32
(anonymous) @ VM4690:1Understand this errorAI
tempList[0].style.backgroundColor = 'green'
'green'
tempList[1].style.backgroundColor = 'Yellow'
'Yellow'
tempList[2].style.backgroundColor = 'Blue'
'Blue'


Using foreach loop

let tempList=document.querySelectorAll('li')
undefined
tempList
NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeList
tempList.forEach(function (list) {
  list.style.backgroundColor='Green'  
})
undefined

jb hm HTMLCollection pa bi list ko alag alg coloe dena chahta hn querryselector ka through to hamay pehaly is ko array banana ho ga take foreach apply ho sakay ni to yea error de gaE

document.getElementsByClassName('list-item')
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]

let list_items=document.getElementsByClassName('list-item')
undefined

list_items
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]

Array.from(list_items)
(4) [li.list-item, li.list-item, li.list-item, li.list-item]

let convertedArray= Array.from(list_items)
undefined

convertedArray
(4) [li.list-item, li.list-item, li.list-item, li.list-item]

convertedArray.forEach(function (lists) {
    lists.style.backgroundColor="green"
})
undefined
*/