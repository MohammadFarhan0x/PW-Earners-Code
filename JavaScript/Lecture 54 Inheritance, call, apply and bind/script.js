
// class User{
//     constructor(name, email) {
//         this.name = name
//         this.email = email
//     }

//     login() {
//         console.log('logging...');
//     }

//     logout() {
//         console.log('logout !');
//     }
// }


// class Customer extends User{
//     constructor(name, email, pass = '1234') {
//         super(name , email)
//         this.pass = pass
//     }

//     addTocart() {
//         console.log('addTocart');
//     }
//     removeFromCart() {
//         console.log('removeFromCart');
//     }
//     wishlist() {
//         console.log('wishlist');
//     }
// }

// class Seller extends User{
//     addProduct() {
//         console.log('addProduct');
//     }
//     removeProduct() {
//         console.log('removeProduct');
//     }
// }


// class Admin extends User{
//    hideProduct() {
//         console.log('hideProduct');
//     }
// }

// class PremiumCustomer extends Customer{
//     constructor(name, email, pass) {
//         super(name, email, pass)
//     }
// }


// let c1 = new Customer('farhan', 'farhan@example.com')
// console.log(c1);

// let s1 = new Seller('kaif', 'kaif@example.com')
// console.log(s1);


let user1 = {
    name: 'farhan', 
    age: 20,
   
}

let user2 = {
    name: 'kaif',
    age: 21
}

let user3 = {
    name: 'sahzan',
    age: 18
}

function printName(country, state) {
    console.log(`Hii, I'm ${this.name} from ${state}, ${country}`);
}

// user1.printname()
// user1.printname.call(user2)
// user1.printname.call(user3)

// printName.call(user1, 'India', 'Uttar Pradesh')
// printName.call(user2, 'Japan', 'Tokyo')
// printName.call(user3, 'USA', 'Ney Jersey')


// printName.apply(user1, ['India', 'Uttar Pradesh'])
// printName.apply(user2, ['Japan', 'Tokyo'])
// printName.apply(user3, ['USA', 'Ney Jersey'])


const newFun = printName.bind(user1, 'India', 'Delhi')

// newFun()