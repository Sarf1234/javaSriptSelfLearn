// DOM Manipulation



// we are select element by 5 methods here it is


// document.getElementById

let heading = document.getElementById('main-header');
// console.log(heading);


// document.getElementByClassName    // its return html array


let container = document.getElementsByClassName('container');
// console.log(container);

// document.getElementsByTagName   // its return html array

let tagname = document.getElementsByTagName('li');
// console.log(tagname);


// document .querySelector

let querySelectorv = document.querySelector('.list-item');
// console.log(querySelectorv);

// document.queselectorAll    // its return nodeList

let allquery = document.querySelectorAll('.list-item');
// console.log(allquery);

// 


// if you want to add css

heading.style.color = 'white';

// for node and change to all


allquery.forEach(element => {
    element.style.fontSize = '1.5rem'
});

// for create Element
let ul = document.querySelector('ul'); 
let li = document.createElement('li');
li.innerText = 'hello bro'
ul.append(li);

// diferece between innettext, textcontent, innerHtml

let listitmes = document.querySelector('.list-item')
// console.log(listitmes.innerHTML);   // <span>The </span>First   return with html
// console.log(listitmes.innerText);   // The First    return only text
// console.log(listitmes.textContent);  // The First   return with format


// if you want to add id then use these methods

li.setAttribute('id', 'main-header')