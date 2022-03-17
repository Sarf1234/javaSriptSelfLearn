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