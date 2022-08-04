function Nameage(){
    let name = prompt('Enter Your name ');
    let age = prompt('Enter Your age ');
    alert(`hello ${name} good evening. and your age is ${age}`);
}


// document.querySelector('.box2').addEventListener('click', buttonClick);


// function buttonClick(){
//     alert('button 2 is clicked')
// }

document.querySelector('.box3').addEventListener('mouseover', function(){
    document.querySelector('.boxColor').style.backgroundColor = 'blue';
})

document.querySelector('.box3').addEventListener('mouseout', function(){
    document.querySelector('.boxColor').style.backgroundColor = 'red';
}, true)


document.querySelector('.mousemove').addEventListener('mousemove', function(){
        document.querySelector('.number').innerHTML = Math.floor(Math.random() *100000000000000);
})


let buttonadd = document.querySelector('.box4');
let displayaddremove = document.querySelector('.displayaddremove');
buttonadd.addEventListener('click', addremovepara);


function addremovepara(){
    if(displayaddremove.classList.contains('displayaddremove')){
       displayaddremove.classList.remove('displayaddremove')
    }else{
        displayaddremove.classList.add('displayaddremove')
    }
}