

const body = document.querySelector("body")
const h1 = document.createElement("h1")
body.append(h1)
h1.setAttribute('style', 'display: flex; justify-content: center; text-decoration: underline; text-underline-offset: 5px;  color: white; text-shadow: 3px 3px 4px black') 

let colorstr = "0123456789abcdef"

// setInterval(function color() {
//     let color = ''
//     for (let i = 1; i <= 6; i++) {
//         let randomValue = Math.floor(Math.random() * colorstr.length)
//         color = color +  colorstr[randomValue]
//     }
//     h1.textContent = `#${color}`
//     body.style.backgroundColor = `#${color}`
// }, 1000)

