const sign_in_btn = document.getElementById("sign-in-btn")
const sign_up_btn = document.getElementById("sign-up-btn")
const container = document.querySelector(".container")
const loginUsername = document.querySelector('.user-login')
const loginButton = document.querySelector('.btn-login')
const loginPassword = document.querySelector('.user-password')

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode")
})

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode")
})

function login() {
  let loginUsernameName = loginUsername.value
  let loginPasswordName = loginPassword.value
  if (loginUsernameName === "admin" & loginPasswordName === "password") {
    alert("Succesfully entered your account")
  }
}

loginButton.addEventListener('click', login)