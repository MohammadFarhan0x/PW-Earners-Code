
// let h1 = document.getElementById("h1")
// let h1 = document.getElementByIdAll("h1")
// let h1 = document.querySelector(".h1")
// let h1 = document.querySelector("#h1")


// let h1 = document.querySelector("h1")
// console.log(h1);

// let p = document.querySelector("p")

// p.textContent = "Hello baccho kaise ho"
// p.innerHTML = "<em>Hello Dostooooo</em>" // very very risky


// console.log(p.textContent);
// console.log(p.innerHTML);

// p.setAttribute("style", "background-color : Pink; font-size : 50px")

// let button = document.querySelector("#btn")

// btn.setAttribute("disabled", "true")
// btn.textContent = "Remove";




// let res = btn.getAttribute("disabled")
// console.log(res);

// btn.removeAttribute("disabled")
// btn.textContent = "Add to cart"


// p.removeAttribute("style")

// // p.classList.add("random")
// // p.classList.remove("random")
// p.classList.toggle("random")

// console.log(p.classList.contains("random"));

// p.style.backgroundColor = "red" // camel case

// p.dataset.helloDostoHii = "Hii"
// console.log(p.dataset.helloDostoHii);



// let div = document.createElement("div")
// let div2 = document.createElement("div")

// div.textContent = "Hello"
// div2.textContent = "Div 2"

let body = document.querySelector("body")

// // body.appendChild(div)

// // body.append(div, div2) // insert in last of body

// body.prepend(div, div2) //insert in start of body

let products = [

    {
        name: "Iphone20",
        price: 12999
    },
    {
        name: "Samsung S23",
        price: 123999
    },
    {
        name: "Realme",
        price: 10999
    },
    {
        name: "Vivo",
        price: 21999
    },
    {
        name: "Oppo",
        price: 18999
    },
   
]

let productList = document.querySelector("#product-list")


products.forEach((product) => {
    const cards = document.createElement("p")
    cards.textContent = `${product.name} - ${product.price}`
    productList.append(cards)
})

let h2 = document.querySelector("#h2-3")
// body.removeChild(h2) // have to access parents for that

h2.remove() // directly on the element ywe want to remove


// let clone = productList.cloneNode(true);
// console.log(clone);
// body.append(clone)


const item = productList.children;
// productList.insertBefore(h2, cards(2))

item[1].before(h2)
// item[2].after(h3)

