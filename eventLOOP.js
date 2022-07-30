/* In the javascript we have a window object to acess web Api and
that window object provide a acess to all as a object suppose
we want a time then we can use settimeout but the settimeout 
is not a part of javascript here is the few thing that are not a part of
javascript :- url, settimeout, dom api, timer, location, console
 


*/


console.log("start here");
setTimeout(function callback(){
    console.log("here is the setTimeout Api");
}, 5000)

console.log("end");


/* EventLOOp =>    so when the setTimeout excute is store in some
                  other memroy and behind of this the start and 
                  when the timer end or stop its send the code to 
                  callback queqe and then the work is how to execute 
                  this thing and how to send the code to call stack so
                  here the event loop work its check callback queqe is 
                  empty or not if its not then he forward that code to 
                  call stack and thats the way to progarame execute 


                  */


console.log("start")
setTimeout(function hello(){
    console.log("here the timer start")
}, 3000)

fetch('https://www.netflixApi.com').then(function(){
    console.log(data);
})

console.log("end")



/*   eventloop is work as to check callback queue is empty or full
  but one thing also its also works with other type with fetch request.
  and in this it works deffrently for that we have also other microtask
  queue so if any taks return any promises and any data that is more 
  prior to the event loop its check whether the call stach empty or not 
  and then its first execute microtask call back or code first and 
  after that its execute callback queue or we say callback queue to 
  taskqueue */
