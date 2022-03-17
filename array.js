// array => array is a non primitive data type.its a collection of 
   //       data type. in array each value hava own index.
   
   
   // how to creat array


   /*  let aray = new Array();

   and the secound type is 

   let aray = [];

   */

// array with value and there length

let array = ['suraj', 'ajay', 'nitesh', 'rohit', 'izmamul'];
console.log(array, "and the lenght of array :", array.length);
console.log("and the last index is array :", array.length - 1);


// we will use in a array diffrent type of data type;

// creating array using split method 

// we will change string to array using asplit;

// concate a array => this for add two array

let num1 = [1,2,3,];
let num2 = [4,5,6];
let num3 = num1.concat(num2);
console.log(num3);

// check the which index element exits to  using indexof()


let indexarray = [1,2,3,4,5,6];
console.log(indexarray.indexOf(5));
console.log(indexarray.indexOf(2));
console.log(indexarray.indexOf(8));
console.log(indexarray.indexOf(0));

//  with includes we will check items are exits in array or not 

let includesarray = [1,2,3,4,5,6,7,8];

console.log(includesarray.includes(1));
console.log(includesarray.includes(8));
console.log(includesarray.includes(10));
console.log(includesarray.includes(0));


let slicennum = [1,2,3,4,5,6];

console.log(slicennum.slice(1, 3));
console.log(slicennum.splice(2, 4));
