
// function f1() {
//     console.log(this);
// }

// f1()

// const random = () => {
//     console.log(this);
// }

// random()

// function outter() {
//     const random = () => {
//         console.log(this);
//     }

//     random()
// }

// outter()

// const outter = () => {
//     function random() {
//         console.log(this);
//     }
//     random()
// }

// outter()

// function Product(name, price) {
//     this.name = name
//     this.price = price
    
// }

// const p1 = new Product("Iphone 2342 ultra pro max hd fold 4k", 2189379821)

// const p2 = new Product("Samsung 23748 galaxy blackhole spaceship", 347538)

// console.log(p2);








// class User{
//     country = "bahrat"
//     constructor(name , country) {
//         this.name = name
//         this.country = country
//     }
// }

// const u1 = new User('farhan', 'India')
// const u2 = new User('Kaif')
// console.log(u1);
// console.log(u2);

// u1.country = 'Hindustan'
// console.log(u1);


// class BankAccount{
//     #balance;
//     static totalBankAccount = 0
//     constructor(initialBalance) {
//         this.#balance = initialBalance
//         BankAccount.totalBankAccount++
//     }

//     get() {
//         console.log(this.#balance);
//     }

//     withdraw(amount) {
//         if (amount > this.#balance || amount < 0) {
//             console.log('Itne Paise nhi h tere pass GARIB!');
//             return
//         }

//         this.#balance = this.#balance - amount
//     }

//     deposit(amount) {
//         if (amount <= 0) {
//             console.log('Beta pagal smjha h kya, mjhe bhi aata h edge cases handle krna');
//             return
//         }
//         this.#balance = this.#balance + amount
//     }
    
//     static calculateTax() {
//         console.log('Calculating Tax....');
//     }
// }

// let acc1 = new BankAccount(500)
// let acc2 = new BankAccount(500)
// let acc3 = new BankAccount(500)
// let acc4 = new BankAccount(500)
// acc1.get()
// acc1.withdraw(500)
// acc1.get()
// acc1.deposit(11232)
// acc1.get()
// acc1.withdraw(11000)
// acc1.get()

// acc1.deposit(-111)
// acc1.get()

// acc1.withdraw()
// acc1.get()

// BankAccount.calculateTax()

// console.log(BankAccount.totalBankAccount)

