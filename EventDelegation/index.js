// Event Delegation =>    event Delegation is we have to target
//                        event through event bubbling of child 
//                        through parents.  


//              OR


//  It allows users to append a Single event listener to a parent
// element that adds it to all of its present and future
// descendants that  match a selector.


// if we want to perform some event on a any li element we have to 
// access on by one 

// document.querySelector('.football').addEventListener('click', ()=>{
//     console.log('football Clicked');
// })

// document.querySelector('.basketball').addEventListener('click', ()=>{
//     console.log('basketball Clicked');
// })
// document.querySelector('.vollyball').addEventListener('click', ()=>{
//     console.log('vollyball Clicked');
// })
// document.querySelector('.tennis').addEventListener('click', ()=>{
//     console.log('tennis Clicked');
// })
// document.querySelector('.cricket').addEventListener('click', ()=>{
//     console.log('cricket Clicked');
// })


// suppose we have lots of category so if we will add one by one is very hectic to add
//for avoid to we have event delegation through we access this 
// through parents and target the value and hadle event.




document.querySelector('.category').addEventListener('click', eventDelegation);

function eventDelegation(e){
    const target = e.target;
    console.log(target.getAttribute('class') + " is cliked")
    if(target.matches('li')){
        target.style.backgroundColor = "lightgrey";
    }
}