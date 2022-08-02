let arr = [1, 2, 3, 4 , 5 , 6];

// Higher order function => when we pass a function in a function as a parameter
//                           and a function return a fucntion is called higher order
//                           function.

//               MAP


let mapoutput =  arr.map(double =>{
        return double * 2;
})

console.log(mapoutput);

//               Filter

let filterOutput = arr.filter(lessthen =>{
    return lessthen > 5;
})

console.log(filterOutput);

//              Reduce

//find the sum of array


let sum = arr.reduce((acc, cur) =>{
    acc = acc + cur;
    return acc;
})

console.log(sum)

// find largest number is array

let largestNumber = arr.reduce((max, cur) =>{
    if(max < cur){
        max = cur;
    }
    return max;
})

console.log(largestNumber);