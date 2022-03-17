// Declare an empty array
let array = new Array();
// for check its array or not 
console.log(Array.isArray(array));
// and the secound method is 

let newarray = [];

// that one is also is a empty array.

//Declare an array with more than 5 number of elements
//Find the length of your array
//Get the first item, the middle item and the last item of the array
let myfriendarray = ['suraj','ajay','nitesh','chunnu','taiba'];
console.log(myfriendarray.length);
console.log(myfriendarray[0]);
console.log(myfriendarray[myfriendarray.length - 1]);
console.log(myfriendarray[2]);


//Declare an array variable name itCompanies and assign initial values
// Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let companies  = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(companies);

//Change each company name to uppercase one by one and print them out
for(const number of companies){
      console.log(number.toUpperCase());
}

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.


for(const number of companies){
    console.log(number, ' are big it company');
}

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found


let checkthecompany = companies.indexOf('Microsoft');
console.log(checkthecompany);
if(checkthecompany === -1){
    console.log('This comapany does not exist in the array')  
 } else {
     console.log('This companies does exist in the array')
 }


 //Sort the array using sort() method
 let sortarray = companies.sort();
 console.log(sortarray);
 for(number of sortarray){
     console.log(number);

 }


let reversearray =  sortarray.reverse();
for(const number of reversearray){
    console.log(number);
}

let arrangenewarray = ['hello1', 'hello2','hello3', 'hello4'];
//Slice out the first 3 companies from the array

let sliceone = arrangenewarray.slice(0, 2);
console.log(sliceone);
console.log(arrangenewarray.slice(0));
console.log(arrangenewarray.slice(-1));
// we will use sllice for remove someting

let spliceone = arrangenewarray.splice(0, 3);
console.log(spliceone);


// some other array method

let arraymodified = [1,2,3,4,5,6,7,8,9];
// push and pop => for add in a last array and remove last element;
arraymodified.push(10);
console.log(arraymodified);
arraymodified.pop();
console.log(arraymodified)


// Remove the first IT company from the array
// Remove the last IT company from the array
// for remove first element
arraymodified.unshift(0);
console.log(arraymodified);
arraymodified.shift();
console.log(arraymodified);





// First remove all the punctuations and change the string to array and count the number of words in the array

// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

// 13


// we can convert string to array using split method

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let splitmethod = text.split(' ');
console.log(splitmethod);
console.log(splitmethod.length);

//Concat the array


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)


 