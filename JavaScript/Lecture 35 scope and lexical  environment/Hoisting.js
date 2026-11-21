// addNum()

// function addNum() {
//     console.log("Hello Dosto!");
// }

// // console.log(addtwoNum);

// addTwoNum()

// let addTwoNum = function () {
//     console.log("annonymous function");
// }
// addTwoNum()

// console.log(a);
// var a = 5;

// console.log(b);
// let b = 7;

// function addNum() {
//     let a = 6;
//     console.log(a);
// }

// addNum()

// var x = 6;

// function random() {
//     console.log(x);
//     var x = 3;
// }
// random()

let city = "Delhi";

// function printCity() {
//     console.log(city);
// }

function random(fn) {
  let city = "Varansi";
  function printCity() {
        console.log(city);
    }
    
    return printCity;
}

let printCity = random();
printCity()
// random(printCity);
// printCity()
