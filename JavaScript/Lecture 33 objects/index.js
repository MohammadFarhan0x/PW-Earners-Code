// let product1 = [456487, 4.5, 75, "iphone"]
// console.log(typeof product1[0]);

// let product2 = {
//     productName : "iphone 21 pro max",
//     price : 59999,
//     avgRating : 4.5,
//     discount : 50,
//     totalReview : 75,
//     printProductName : function(){
//         console.log(this.productName);
//     },
//     printdiscount(){
//         console.log(this.discount);
//     }
// }

// product2.printProductName()
// product2.printdiscount()


// console.log(Object.keys(product2));
// console.log(Object.values(product2));
// console.log(Object.entries(product2));

// for( value of product1){
//     console.log(value);
// }

// for(let i = 0; i < product1.length; i++){
//     console.log(product1[i]);
// }

// product1.forEach (function(value, index){
//     console.log(value, index);
// })

// product1.forEach((value, index) => console.log(value, index))

// for ( value in product2){
//     console.log(product2);
// }

// let product1 = [456487, 4.5, 75, "iphone"]

// const [price, rating, reviews, comment, name] = [456487, 4.5, 75, 10, "iphone"]
// console.log(price);

let product2 = {
    productName : "iphone 21 pro max",
    price : 59999,
    avgRating : 4.5,
    discount : 50,
    totalReview : 75,
    printProductName : function(){
        console.log(this.productName);
    },
    printdiscount(){
        console.log(this.discount);
    }
}

// let {price, printdiscount, avgRating} = product2
// console.log(price, printdiscount(), avgRating);

// for([key, value] of Object.entries(product2)){
//     console.log(key, value);
// }


// let product1 = [456487, 4.5, 75, "iphone"]

// const [price, rating, reviews, comment, name] = [456487, 4.5, 75, 10, "iphone"]
// console.log(price);

// let arr = [53, 15, 67, 89, 74, 65, 499]

// console.log(arr);
// console.log(...arr);

let  a = [1, 2]
let b = [3, 4]

let c = [...a, ...b]
// console.log(...c);
// Math.max()

let product1 = [456487, 4.5, 75, "iphone"]

const [n, p, ...hello] = ["iphone", 456487, 4.5, 75, 10,]

// console.log(hello);

function add(num1, ...numbers){
    console.log(num1);
    console.log(numbers);
}
// console.log(add(4, 5, 67, 873,));

let {price, productName, avgRating, ...privateDetail} = product2

// console.log(price, productName, privateDetail);


    


