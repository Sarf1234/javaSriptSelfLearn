


function a(){
    let a = 10;
    console.log(a);
}

setTimeout(a, 3000); 




function z(){
    for(var i = 1; i <= 5; i++){
        setTimeout(function(){
            console.log(i);
        }, i*1000)
    }

    console.log("here the issue")
}

z();


function y(){
    for(let i = 1; i <= 5; i++){
        setTimeout(function(){
            console.log(i);
        }, i*1000)
    }

    console.log("here the issue")
}

y();



// and if you want to go with var 

function x() {
    for (var i = 1; i <= 5; i++) {
        function close(x) {
            setTimeout(function () {
                console.log(x);
            }, x * 1000)

        }
        close(i);
    }
    console.log("here the issue")

}

x();
