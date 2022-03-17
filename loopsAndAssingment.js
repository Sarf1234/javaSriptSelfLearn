// loops => we will use the loop for archive a taks. in a loop 
//           we will do something until you are not fulfill.


// have mostly 3 type of loops

// for loop, 

for (let i = 0; i < 3; i++){
    console.log(i);
}

// while loop

let i = 0;
while(i < 3){
    console.log(i);
    i++;
}

// do while loop
do{
    console.log("hello");
    i++;
}while(i < 10);

// for of loop

let array = [1,2,3,4,5,6,7];

for(const number of array){
    console.log(number);
}


// break => we will use break for the exit in the loop

for(let i = 0; i <= 5; i++){
    if(i == 3){
      break;
    }
    console.log(i)
  }
  

//   continue =>  We use the keyword continue to skip a certain iterations.

for(let i = 0; i <= 5; i++){
    if(i == 3){
      continue
    }
    console.log(i)
  }

  //                          start exercises

  const countreis = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'];

  for(const number of countreis){
      console.log(number);
  }
  let n = 5;
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      string += "#";
    }
    string += "\n";
  }
  console.log(string);


  //Use for loop to iterate from 0 to 100 and print the sum of all numbers.

  let sum = 0;
  for(let i = 0; i <= 100; i++){
      sum = sum + i;
  }
  console.log(sum);

  //Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let  even = 0;
for(let i = 1; i <= 100; i++){
    if(i % 2 ==0){
        even = even + i;
    }
}
console.log(even);

let odd = 0;
for (let i = 0; i <= 100; i++){
    odd += i;
}
console.log(odd);


// Develop a small script which generate array of 5 random numbers


let araay = [1,2,3,4,5,6,7,8,9];
let stng = ""
for(let i = 0; i < 5; i++){
      stng += araay[Math.floor(Math.random(araay[i]) * 6)];
}
console.log(stng);