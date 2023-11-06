// consversion in javascript is deffrent and behave vvery diffrent 
// with null and undefined and with string also


// console.log("2" + 2)  // 22
// console.log(2 + "2"); // 22
// console.log(2 + 2 +"2"); // 42
// console.log("2" + 2 + 2); // 222

// its alos behava deffrent with comparision oprator == is 
// not convert the value but > < <= first convert and then check


// console.log(null > 0)
// console.log(null === 0)
// console.log(null >= 0)

// console.log(Boolean(null));

// here is important topic all the premitive type data type are 
// call by value means we decalre a variable and  pass the other 
// value of same varible so it will be change by the value 
// its change only own not the real


// let a = 10
// let b = a;
// b = 20;
// console.log(a)  // 10
// console.log(b) // 20

// but its deffrent for non premitive its when its ger refrence and 
// we will change the value its change the real one

// let hello = {
//     name : "sarfraj",
//     lastname : "shekh"
// }

// let hello1 = hello;

// hello1.name = "rahul"

// console.log(hello)    //{ name: 'rahul', lastname: 'shekh' }
// console.log(hello1)   //{ name: 'rahul', lastname: 'shekh' }



//   go for string method


