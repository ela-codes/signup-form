// GLOBAL VARIABLES
const pwd = document.querySelector("i.password")
const pwdField = document.querySelector("#password")

const confirmPwd = document.querySelector("i.confirm_password")
const confirmPwdField = document.querySelector("#confirm_password")

const pwdFeedback = document.querySelector(".pwd-feedback")
const btn = document.querySelector("button")

// EVENT LISTENERS
pwd.addEventListener("click", e => showPassword(e, pwdField))
confirmPwd.addEventListener("click", e => showPassword(e, confirmPwdField))
confirmPwdField.addEventListener("input", () => checkPasswordMatch())

// PASSWORD FUNCTIONS

function showPassword(e, field) {
    e.target.classList.toggle("fa-eye-slash")
    const currType = field.getAttribute("type") === "password" ? "text" : "password"
    field.setAttribute("type", currType);
}

function checkPasswordMatch() {
    if (pwdField.value !== confirmPwdField.value) {
        pwdFeedback.innerHTML = "Passwords do not match"
        pwdField.style.border = "1px solid red"
        confirmPwdField.style.border = "1px solid red"
        btn.disabled = true
    } else {
        pwdFeedback.innerHTML = ""
        pwdField.style.border = "var(--input-box)"
        confirmPwdField.style.border = "var(--input-box)"
        btn.disabled = false
    }
}