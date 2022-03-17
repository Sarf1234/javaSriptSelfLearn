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

  