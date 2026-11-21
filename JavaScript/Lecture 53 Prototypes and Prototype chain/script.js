let user = { 
    name: 'farhan',
    age : 20
}

// console.log(user);

let arr = [1, 2, 3]

// console.log(arr);

// console.log(arr.__proto__.__proto__ === user.__proto__);

// Object.prototype.allInOne = function () {
//     console.log('All in one hoon mai');
// }

// Array.prototype.printName = function (arr) {
//     for (let i = 0; i < this.length; i++){
//         console.log(this[i]);
//     }        
// }

let color = ['red', 'yellow', 'blue']

// color.printName()

// shadowing

let common = {
    eat() {
        console.log('eating..');

    }
}

let person = Object.create(common)

person.walk = function () {
    console.log('walking...');
}

let student = Object.create(person)

student.study = function () {
    console.log('studying..');
}

// console.log(common.hasOwnProperty('eat'));

// let res = Object.getPrototypeOf(student)
// console.log(res);

// console.log(Object.getPrototypeOf(Object.getPrototypeOf(student)));


// console.log(student.__proto__);
// console.log(student.__proto__.__proto__);
// console.log(student.__proto__.__proto__.__proto__.__proto__);

// let obj = Object.create({})
// console.log(obj);




// class User {
//     country = 'india'

//     constructor(name, country) {
//         this.name = name
//         this.country = country
//     }

//     printName() {
//         console.log(this.name);
//     }

// }

// const u1 = new User('farhan', 'India')
// const u2 = new User('kaif', 'India')


// class BankAccount {
//     #balance; // this is private property
//     static totalBankAccount = 0;
//     constructor(initialBalance) {
//         this.#balance = initialBalance
//         BankAccount.totalBankAccount++;
//     }

//     get() { // method
//         console.log(this.#balance);
//     }

//     withdraw(amount) { // method
//         if (amount > this.#balance) {
//             console.log("Bete itne paise na hai tere pass");
//             return
//         }

//         this.#balance = this.#balance - amount
//     }

//     deposit(amount) { // method
//         if (amount <= 0) {
//             console.log("Bete pagal samjha hua kya, muje aate hai edge cases handle krne garib");
//             return
//         }
//         this.#balance = this.#balance + amount
//     }

//     static calculateTax(){ // static method
//         console.log("calculating tax...");
//     }
// }

// const acc1 = new BankAccount(500);
// const acc2 = new BankAccount(500);
// const acc3 = new BankAccount(500);
// const acc4 = new BankAccount(500);


// console.log(acc1 instanceof User);
// console.log(acc1 instanceof BankAccount);
// console.log(u1 instanceof User);
// console.log(u1 instanceof BankAccount);

// console.log(String instanceof Object);
// console.log(Array instanceof Object);
// console.log(Number instanceof Object);
// console.log(Object instanceof Object);