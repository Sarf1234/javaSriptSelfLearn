// CallBack => when we pass a function inside a function is called
//             callback function.


//                   or

// when we pass a function as a parameter in a function is called 
// callback function.

// let btn = document.getElementById('clickme');
// btn.addEventListener('click', () =>{
//     console.log("click me")
// })


// let newbtn = document.querySelector('.toggle');


// newbtn.addEventListener('click', toggleColor)
// function toggleColor(){
//     newbtn.classList.toggle('toggle-blue')
// }


function CallBackA(massage){
    console.log("Hey i am A");
    setTimeout(massage, 2000)

}
function CallBackB(){
    console.log("Hey i am B")
}
setTimeout(() =>CallBackA(CallBackB), 3000);
