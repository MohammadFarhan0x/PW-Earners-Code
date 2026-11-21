

// function fun1() {
//     // console.log("hello");
//     return 'fun1'
// }

// async function fun2() {
//     // console.log("hii");
//     return 'fun2'
// }
// console.log(fun1());

// fun2().then((data) => {
//     console.log(data);
// })


// console.log("a");

// async function fun3() {
//     console.log('b');
// }

// fun3()

// console.log('c');

// async function fun3() {
//     return 'hello'
// }

// function fun4() {
//     // return Promise.resolve('hiiii')
//     return 'hii'
// }

// console.log('1');

// async function fun5() {

//     console.log('2');
//     let data = await fun3()
//     console.log('3');
//     let data2 = await fun4()
//     console.log('4');
//     console.log(data, data2);

// }

// console.log('farhan');

// fun5()

// console.log('5');

// console.log('a');

// async function random() {
//     console.log('b');

//     await 1;

//     console.log('c');
// }

// random()

// console.log('d');


// let data;

// async function userData() {
//     return {name : 'farhan'}
// }

// function fun6() {
//     return Promise.reject('error aa gya')
// }

// async function fun7() {
//     try {
//         data = await userData()
//         let data2 = await fun6()
//         console.log(data.name, data2);
//     } catch (err) {
//         console.log(err);
//     } finally {
//         console.log('mai to hamesha chalunga');
//     }
// }

// fun7()

function searchPizza() {
    return new Promise((resolve, reject) => {
        console.log('Searching Pizza......');
        setTimeout(function fun1() {
            console.log('Pizza menu is here!');
            let price = 120
            resolve(price)
        },2000)
    })
}

function addToCart() {
    return new Promise((resolve, reject) => {
        console.log('Pizza adding to cart...');
        setTimeout(function fun2() {
            console.log('Pizza added to cart !');
            resolve()
        },3000)
    })
}

function payment(price) {
    return new Promise((resolve, reject) => {
        console.log(`Payment Initialized : Amount ${price}`);
        setTimeout(function fun3() {

            let isPaymentSuccessful = true

            if (isPaymentSuccessful) {
                console.log(`Payment completed : Amount ${price}`);
                resolve()
            } else {
                reject('payment failed')
            }

        },5000)

    })
}

async function orderFood() {
    try {
        let price = await searchPizza()
        await addToCart()
        await payment(price)
        console.log('pizza on the way');
    } catch (error) {
        console.log(error);
    }
}

orderFood()

