
const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")

const userError = document.getElementById("userError")
const emailerror = document.getElementById("emailerror")
const passwordError = document.getElementById("passwordError")


form.addEventListener("submit",function(e){
    e.preventDefault()

    let valid = true;

    if (username.value.trim() == "") {
        userError.innerHTML= "Username Is required"
        valid = false
    }else {
        userError.innerHTML = ""
    }

  if (email.value.trim() === "") {
    emailerror.innerHTML = "Email is Required"
  }else if(!email.value.includes("@")){
    emailerror.innerHTML = "Invlid Email Formt"
    valid = false
  }else {
    emailerror.innerHTML = ""
  }


  if (password.value.length < 6) {
    passwordError.innerHTML = "Password Must Be At Lest 6 charchters"
    valid = false
    
  } else {
    passwordError.innerHTML = ""
    
  }


   if (valid) {
    alert("Form is valid And Submitted")
    
   }
})