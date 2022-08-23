// basically default is event bubbling its goind to child to parents 

// event propagation
// in event propagation we have 3 phase 

// Capturing                Target               Bubbling



// Capturing =>    capturing is when we click on button or element is goes top to down
//                 means its going to parents and then child when we click on child.


//  Target    =>    when we click button we have spacial property event and
//                  we pass in a function parameter to target the event.



// Bubblig =>      bubbling is like bubble when we click on a button is execute first 
//                 child and then its goes to parents.

// addeventListeners =>  in eventListeners we have 3 parameter first one is click 
//                       second one is callback function and third one is event 
//                       propogation value you can pass as a true and false.basically
//                       default is false.


//                    Event Bubbling


// document.querySelector('.container').addEventListener('click', function(){
//     console.log('container 1');
// })

// document.querySelector('.container2').addEventListener('click', function(){
//     console.log('container 2');
// })

// document.querySelector('.contianer3').addEventListener('click', function(){
//     console.log('container 3');
// })


//                    Event capturing


// document.querySelector('.container').addEventListener('click', function(){
//     console.log('container 1');
// }, true)

// document.querySelector('.container2').addEventListener('click', function(){
//     console.log('container 2');
// },true)

// document.querySelector('.contianer3').addEventListener('click', function(){
//     console.log('container 3');
// }, true)


//          stop propagation



document.querySelector('.container').addEventListener('click', function(){
    console.log('container 1');
}, true)

document.querySelector('.container2').addEventListener('click', function(e){
    console.log('container 2');
    e.stopPropagation();
},true)

document.querySelector('.contianer3').addEventListener('click', function(){
    console.log('container 3');
}, true)