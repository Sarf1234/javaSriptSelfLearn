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


// const hello = "here i just start and i know how to start and end"
// console.log(hello);

// console.log(hello.charAt(4));
// console.log(hello.indexOf('i'))
// console.log(hello.toUpperCase());
// console.log(hello.toLowerCase());
// console.log(hello.length);
// console.log(hello.replace("i", "sarfraj")) // its change but only only one element if other i is exist it cant change
// console.log(hello.includes('know'))
// console.log(hello.split("i")) // its return array
// console.log(hello.split("i").join('').trim());
// console.log(hello.slice(2, 9));



// here we can start with array method

const array = [1, 2, 3, 4, 5, 6]

// const allelement =  array.forEach(element => {
//      console.log(element);
// });

// const slcce  = array.slice(0, 1);
// console.log(slcce)
// console.log(array)
// const spilice = array.splice(0, 1);
// console.log(spilice)
// console.log(array)

// console.log(allelement);

// for(const num of array){
//      console.log(num)
// }


// random color genrate

let color = '#'
let string = '123456789ABCDEF';
// const hello;
// console.log(hello)
for(let i = 0; i < 6; i++){
     color += string[Math.floor(Math.random() * 10)]   
}

console.log(color)





