function searchPizza(cb1) {
    console.log("pizza searching.....");
    setTimeout(function fun1()  {
        console.log("Your Pizza menu is here.....!");
        let price = 120; 
        cb1(price)
    }, 2000)
}

function addToCart(cb2) {
    console.log("pizza adding to cart...");
    setTimeout(function fun2()  {
        console.log("pizza Added to cart.");
        cb2()
    }, 3000);
}

function payment(price, cb3) {
    console.log(`payment initialized : ${price} `);
    setTimeout(function fun3()  {
        console.log(`payment Successfully completed : ${price} `);
        cb3()
    }, 5000);
}

searchPizza(function a(price) {
    addToCart(function b() {
        payment(price, function c() {
            console.log('pizza deliverd');
        });
    });
});

