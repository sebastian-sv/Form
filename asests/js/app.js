const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btnSend = document.getElementById("send-form");
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

btnSend.addEventListener("click",(e)=>{
  e.preventDefault();
  const errors = document.getElementById("errors");
  let validation = false;
   warnings = "";
   if(username.value.length == ""){
     warnings += `empty name <br>`;
     validation = true;
   }else if(username.value.length < 8){
     warnings +=`short name  <br>`;
     validation = true;
   }
   if(!emailRegex.test(email.value)){
     warnings += `Invalid email <br>`;
     validation = true;
   }
   if(password.value.length == ""){
     warnings += `empty password <br>`;
     validation = true;
   }else if(password.value.length <8){
     warnings += `short password `;
     validation = true;
   }
   if(validation){
     errors.innerHTML = warnings;
   }else{
     errors.innerHTML = `you have successfully registered`;
   }
});
const showPassword = document.getElementById("show-password");

showPassword.addEventListener("click",()=>{
  if(password.type === "password"){
    password.type = "text";
    showPassword.classList.replace("fa-eye-slash","fa-eye");
  }else{
    password.type = "password";
    showPassword.classList.replace("fa-eye","fa-eye-slash");
  }
});
