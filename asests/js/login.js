const email = document.getElementById("email");
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const password = document.getElementById("password");
const form = document.getElementById("form");

form.addEventListener("submit",validarLogin);

function validarLogin(e){
  e.preventDefault();
  
    /* variables */
    
  let error = document.getElementById("error");
  let result = false;
  let warnings = "";
  error.innerHTML = "";
  
  /* validación de datos */
   if (!emailRegex.test(email.value)) {
     warnings += `El correo electrónico no es válido <br>`;
     result = true;
   }
    if(password.value.length == ""){
     warnings +=`la contraseña no debe estar vacía <br>`;
     result = true;
   }
   if (result) {
     error.innerHTML = warnings;
   } else {
     error.innerHTML = "Campos completados correctamente...";
   }
};

/* mostrar y ocultar la contraseña  */

const showPassword = document.getElementById("show-pass");

showPassword.addEventListener("click",()=>{
  if(password.type === "password"){
     password.type = "text";
     showPassword.classList.replace("fa-eye-slash","fa-eye");
  }else{
     password.type = "password";
     showPassword.classList.replace("fa-eye","fa-eye-slash");
  }
});

/*======== copyright 2021 sebastian ========*/
