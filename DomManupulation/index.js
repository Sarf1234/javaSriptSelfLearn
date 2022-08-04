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


// allquery.forEach(element => {
//     element.style.fontSize = '1.5rem'
// });

// for create Element
// let ul = document.querySelector('ul'); 
// let li = document.createElement('li');
// li.innerText = 'hello bro'
// ul.append(li);

// diferece between innettext, textcontent, innerHtml

let listitmes = document.querySelector('.list-item')
// console.log(listitmes.innerHTML);   // <span>The </span>First   return with html
// console.log(listitmes.innerText);   // The First    return only text
// console.log(listitmes.textContent);  // The First   return with format


// you want to add remove and check attribute then use these methods

// li.setAttribute('class','list-item')
// li.removeAttribute('class');
// console.log(listitmes.getAttribute('class'));

// if you want to add remove check class 

// li.classList.add('list-item')
// li.classList.remove('list-item')
// console.log(li.classList.contains('list-item'));

// how can we remove element 

// li.remove();

// Traverse the DOM

let ul = document.querySelector('ul'); 
// console.log(ul.parentNode);
// console.log(ul.parentElement);

// for childNode traverse

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = "blue"


// for childElement traverse

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// ul.firstElementChild.style.backgroundColor = 'blue';
// ul.lastElementChild.style.backgroundColor = 'blue';

// for sibling traverse

// console.log(ul.previousSibling);
// console.log(ul.nextSibling);

// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);