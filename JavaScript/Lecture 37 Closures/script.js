

function outter() {
    let a = 5;
    function inner() {
        console.log(a);
    }
    a = 180
    return inner
}


let response = outter();
console.log(response());