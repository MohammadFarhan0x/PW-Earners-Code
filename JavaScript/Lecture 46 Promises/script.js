

// const p = new Promise((resolve, reject) => {
//     reject("server down hai ladle")
//     resolve("hii")
// })

// console.log(p);

// p.then(function onFulfilled(val) {
//     console.log(val);
// }, function onReject(val) {
//     console.log(val);
// })

// const res = p.then(function (val) {
//     console.log(val);
// }, function (val) {
//     console.log(val);
// })

// const res = p.then(function onFulfiled(val) {
//     // console.log(val);
//     return val
// }).then(function onfulfilled(val) {
//     // console.log(val);
//     return val
// }).then(function onfulfilled(val) {
//     // console.log(val);
//     return val
// }).then(function onfulfilled(val) {
//     console.log(val);
// }).catch(function onReject(err) {
//     console.log(err);
// }).finally(function onFinal() {
//     console.log("Yeh to hamesha hi chalega");
// })

// console.log("a");

// const p2 = new Promise(function f1(resolve, reject) {
//     console.log("b");
//     resolve("Resolve")
//     console.log("random");
// })

// p2.then(function f2(val) {
//     console.log("then");
//     console.log(val);
// }).catch(function f3() {
//     console.log("Catch");
// }).finally(function () {
//     console.log("Finally");
// })

// console.log("c");


function searchPizza() {
    return new Promise((resolve, reject) => {
        console.log("searching pizza....");

        setTimeout(function searching() {
            console.log("here is the pizza menu!");
            let price = 120
            resolve(price)
        }, 2000)
    })

}


function addToCart(price) {
    return new Promise((resolve, reject) => {
        console.log("pizza adding to cart.....");

        setTimeout(function cart() {
            console.log("pizza added to cart");
            resolve(price)
        }, 3000)
    })
}

function payment(price) {
    return new Promise((resolve, reject) => {
        console.log('payment Initiated : Amount', price);

        setTimeout(function pay() {
            let isPaymentSuccessful = false

            if (isPaymentSuccessful) {
                console.log('Payment successfuly completed : Amount', price);
            } else {
                reject("payment failed")
            }

        }, 5000)
    })
}

let res = searchPizza()

res.then(function f1(price) {
    return addToCart(price)
}).then(function f2(price) {
    return payment(price)
}).then(function f3() {
    console.log("pizza delivered");
}).catch(function f4(err) {
    console.log(err);
})