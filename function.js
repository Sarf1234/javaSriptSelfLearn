//        Functions Topics

//   (1) what is function...????

/* functions is a group of block code we can 
resuse mulptiple times whenever we need it.
suppose we have to performed some task and 
in this task we have same problem add two 
number that time we will make function for this 
and we will user many times in a code that time
we dont need to write sum code again again.

*/

function hello(num1, num2) {
    console.log(`Here is the sum of two number : ${num1 + num2}`);

}

hello(2, 3);
hello(2, 3);
hello(2, 3);


//   Arrow Functions

/*  Arrow function expressions were 
introduced in ES6. These expressions 
are clean and concise. The syntax for an 
arrow function expression does not require
the function keyword and uses a 
fat arrow => to separate the 
parameter(s) from the body.
 

*/

const sum = () => {
    return console.log("Hello world");
}
sum();
sum();
sum();

// Anonymous Functions

/* Anonymous Functions is funtion without name 
its called Anonymous Functions.

*/
let sumAnonymmous = function () {
    console.log("Hello world with anonymous");
}
sumAnonymmous();

//    Function expressions     

/* Function expressions create functions
 inside an expression instead of as a 
 function declaration. They can be 
anonymous and/or assigned to a variable.

*/

const funvtionExpression = function () {
    return console.log("function expressions");
}

funvtionExpression();


// call back functions

/* Any function that is passed by an argumnet
called call back function.
*/

function hello(name) {
    console.log("Hey i am a function");
}

function callBack(name2) {
    console.log("hey i am call back funtion");
    hello();
}

callBack(hello);

/* we will take a function and pass in the 
 another function as a argument called call back
 function 

 in a call back fuction secound function execute
 after first function

 */

//HIGHER-ORDER FUNCTIONS

/*We call the functions that get 
passed in as parameters and invoked 
callback functions because they get
 called during the execution of 
 the higher-order function.


 A higher-order function is a function 
 that either accepts functions as parameters,
 returns a function, or both

 */

function hello(name) {
    if (name === 'vinod') {
        return (subject) => {
            console.log(`Hey how are you ${name}. Do you like ${subject}`)
        }
    }
    else {
        return () => {
            console.log("sorry you are not vinod");

        }
    }
}

// we can call higher order function with 
// 2 type

hello('vinod')('bio');

let myNew = hello('vinod');
myNew('science');


// ITERATORS 

// forEach()

/* its a higher order function to return a
function for print a array we can use this
its go one and one array element and print it
*/

let a = ['sarf raj', 'rehan', 'farhan'];

a.forEach(element => {
    console.log(`Hey how are you ${element}.`);
});

// map()
// this one is also same as a foreach but
// its returning a new array

let b = [10, 20, 30, 40, 50]

const mapMethod = b.map(elem => {
    return (elem / 10);
});

console.log(mapMethod);

// filter()
const randomNumbers = [375, 200, 3.14, 7, 13, 852];


const smallNumbers = randomNumbers.filter(elem => elem < 250);
console.log(smallNumbers);

/* its also return a new array with filter
method we will check array elements.

*/
// findIndex()

/* We sometimes want to find the location 
of an element in an array. That’s where the
 .findIndex() method comes in! Calling 
 .findIndex() on an array will return the 
 index of the first element that evaluates to 
true in the callback function.

*/

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
    return animal === 'elephant';
});
console.log(foundAnimal);

const startsWithS = animals.findIndex(animal => {
    return animal[0] === 's' ? true : false;
});

console.log(startsWithS);

// reduce()

/* we can use reduce method do some operation
on array. in reduce method we have 2 parameter in
a function as first one in hold the value and 
secound one is do some operation with value 
*/

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) =>{
    console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
return accumulator + currentValue;
}, 10);

console.log(newSum);

// we will also pass other argument in reduce 
//method it also work in reduce and check for
// run the code


//closure

/*

A closure is the combination of a function 
bundled together (enclosed) with references to
its surrounding state (the lexical environment).
In other words, a closure gives you access 
to an outer function's scope from an inner
function. In JavaScript, closures are 
created every time a function is created, 
at function creation time.

*/

function init() {
    var name = 'Sarf raj'; 
    function displayName() { 
      console.log(name);
    }
    displayName();
  }
  init();

  /* 

  This one is a perfact example of lexical environment
  we will use name varible in a inner funtion but if
  we want to access name varible in out o main 
  funtion we cant that is similar as a block scope

  */

  function makeFunc() {
    var name = 'Sarf raj';
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  var myFunc = makeFunc();
  myFunc();

  /* in a above code we can see this 
  this function is return a function and 
  with main function we can call inner function 
  that is a closures

  */
