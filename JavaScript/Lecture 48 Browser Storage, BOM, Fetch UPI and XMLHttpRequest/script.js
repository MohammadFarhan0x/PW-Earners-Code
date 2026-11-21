

// localStorage.setItem('num1', '1')
// localStorage.setItem('num2', '16')
// localStorage.setItem('num3', '196')

// let result = localStorage.getItem('num3')
// console.log(result);

// let result2 = localStorage.key('2')
// console.log(result2);

// localStorage.removeItem('num1')

// document.querySelector('#add-lcl-strg').addEventListener('click', () => {
//     localStorage.setItem('name', 'farhan')
    
// })

// document.querySelector('#clr-lcl-strg').addEventListener('click', () => {
//     localStorage.clear()
// })


// document.querySelector('#add-ssn-strg').addEventListener('click', () => {
//     sessionStorage.setItem('name', 'kaif')
// })

// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     let data = xhttp.responseText;
//     console.log(data);
// };
// xhttp.open("GET", "https://api.github.com/users/MohammadFarhan0x", true);
// xhttp.send();

// fetch('https://api.github.com/users/MohammadFarhan0x').
//     then(data => data.json()).
//     then(data => console.log(data))


async function getUser(username = 'MohammadFarhan0x') {
    const response = await fetch(`https://api.github.com/users/${username}`)

    const data = await response.json()

    return data

}



document.querySelector('#show-profile').addEventListener('submit', async (e) => {
    e.preventDefault()
    
    let username = document.querySelector('#github-username').value

    const data = await getUser(username)

    document.querySelector('#show-info').innerHTML = `
    <img src=${data.avatar_url} alt="">
    <h2>${data.name}</h2>
    <i>username : ${data.login}</i>
    <p>bio: </p>
    <p>followers: ${data.followers}</p>
    <p>following :${data.following}</p>
    <p>Public repose : ${data.public_repos}</p>`
})



