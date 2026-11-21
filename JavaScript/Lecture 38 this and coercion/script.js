"use strict"


// let student = {
//     name : "Farhan",
//     printName: function () {
//         console.log("Hii", this.name);
//     }
// }
// student.printName()


// let result1 = student.printName;

// result1()


// let student2 = {
//     name: "Pritam",
//     printName : student.printName
// }

// student2.printName()

// function fun1() {
//     let name = "Fariha"

//     function fun2() {
//         // console.log(name);
//     }

//     name = "Iqra"
//     return fun2;
// }

// let result2 = fun1()

// result2()

// console.log(this);
// console.log(global === globalThis);
// console.log(global === this);

// var a = 7;


// console.log(this.a);
// function fun1() {
//     console.log(this);
// }

// fun1()


// function fun4() {
//     let name = "something";
//     let product = {
//         name: "Iphone",
//         printName: function () {
//             const print = () => {
//                 console.log(this.name);
//             }
//             print()
//         }

//     }
//     product.printName()
// }

// fun4()


// let name = "something"
// function fun4() {
//     let product = {
//         name: "Sahil",
//         printName: () => {
//             console.log("Hii", this.name);
//         }
//     }
//     product.printName()
// }

// fun4()

// let nestedFunction = {
//     name: "Something",
//     fun: function () {
//         let name = "Something";
//         let product = {
//             name: "Iphone",
//             printName: function () {
//                 const print = () => {
//                     console.log(this.name);
//                 }
//                 print()
//             }
//         }
//         product.printName()
//     }
// }

// nestedFunction.fun()




// let product1 = {
//     name: "Sahil",
//     fun: function () {
//         let product2 = {
//             name: "Farhan",
//             print: function () {
//                 let product3 = {
//                     name: "Sahzan",
//                     fun1:  function () {
//                         console.log(this.name);
//                     }

//                 }
//                 product3.fun1()
//             }
//         }
//         product2.print()
//     }
// }
// product1.fun()


// let product1 = {
//     name: "Sahil",
//     fun: function () {
//         let name = "Hanzala";
//         let product3 = {
//             name: "Sahzan",
//             fun1:function () {
//                 console.log(this.name);
//             }
//         }
//         product3.fun1()
//     }
// }
// product1.fun()