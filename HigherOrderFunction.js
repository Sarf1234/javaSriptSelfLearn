let array = [1, 2, 3, 4 , 5 , 6];

// Higher order function => when we pass a function in a function as a parameter
//                           and a function return a fucntion is called higher order
//                           function.



function A(B){
          console.log("Heigher order function here");
          B();
     
}

function B(){
    console.log("call back function " )
}
function C(){
    console.log("Here is the normal function")
}

A(B);
C();