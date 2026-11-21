
const form = document.querySelector("#form")
const btn = document.querySelector("#btn")
const username = document.querySelector("#name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const bio = document.querySelector("#bio")
const charCount = document.querySelector("#char-count")
const country = document.querySelector("#country")
const checkbox = document.querySelector("#checkbox")
const passHint = document.querySelector("#pass-hint")


const showError = (input, erroMessage) => {
    input.parentElement.querySelector(".error-message").textContent = erroMessage
}

const clearError = (input) => {
    input.parentElement.querySelector(".error-message").textContent = ""
}


function validUsername(username) {

    if (username.value.trim().length === 0) {
        showError(username, "Please enter a valid username")
        return false
    }

    if (username.value.trim().length < 3) {
        showError(username, "Username must be atleast 3 character")
        return false
    }

    clearError(username)
    return true

}

function validEmail(email) {

    if (email.value.trim().length === 0) {
        showError(email, "Please enter your email")
        return false
    }

    if (email.value.trim().includes(".in" && ".hooyah" && ".bingo")) {
        showError(email, "Email is invalid")
        return false
    }

    if (email.value.trim().includes("@gmail.com")) {
        clearError(email)
        return true
    }
}

function validPassword(password) {
    if (password.value.trim().length === 0) {
        showError(password, "Please choose a Password")
        return false
    }

    if (password.value.trim().length < 3) {
        showError(password, "Passwod is too short")
        return false
    }

    if (password.value.trim().length > 8) {
        showError(password, "Passwod is too long")
        return false
    }

    clearError(password)
    return true
}

function chooseCountry(country) {
    if (country.value.trim().length === 0) {
        showError(country, "Please select your Country")
        return false
    }

    clearError(country)
    return true
}

function agreeConditions(checkbox) {
    if (checkbox.checked) {
        clearError(checkbox)
        return true
    } else {
        showError(checkbox, "Please accept the terms and conditions to proceed.")
        return false
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isValidUsername = validUsername(username)
    const isValidEmail = validEmail(email)
    const isValidPassword = validPassword(password)
    const isCountryChoosed = chooseCountry(country)
    const isCheckboxChecked = agreeConditions(checkbox)

    if (isValidUsername && isValidPassword && isValidEmail && isCheckboxChecked && isCountryChoosed) {
        document.querySelector("h1").classList.remove("hidden")
    } else {
        document.querySelector("h1").classList.add("hidden")
    }


})



const limit = 150;
charCount.textContent = `${limit} character remaining`



bio.addEventListener('focus', (e) => {
    charCount.classList.remove("hidden")
})

bio.addEventListener('blur', (e) => {
    charCount.classList.add("hidden")
})

bio.addEventListener('input', (e) => {
    const remain = limit - bio.value.length;
    charCount.textContent = `${remain} character remaining`;
})




// username.addEventListener('input', (e) => {
//      console.log(username.value);
//      console.log(username.value.length);
// })

// username.addEventListener('change', (e) => {
//      console.log(username.value);
// })

// country.addEventListener('change', (e) => {
//     console.log(country.value);
// })

// checkbox.addEventListener('change', (e) => {
//     console.log(checkbox.checked);
// })

// username.addEventListener('focus', (e) => {
//     console.log("Hii");
// })

// username.addEventListener('blur', (e) => {
//     console.log("By");
// })








