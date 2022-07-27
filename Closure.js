/* Closure =>   A function having access 
                to the parent scope, even after 
                the parent function has closed.

              OR
  
 closure is  bundle of function along with scope is 
 called closure 
 it mean like if you have a function in a function 
 then the inner function use parent function variable
 it has a scope also of parent function.

 

*/


function x(){
    let a = 10;
    function y(){
        console.log(a);
    }
    y();
}

x();

 //  uses of closure 

 // 1. module desing pattern
 // 2. currying 
 // 3. function line once
 // 4. memoize
 // 5. maintaining state in async world
 // 6. setTiomeouts

