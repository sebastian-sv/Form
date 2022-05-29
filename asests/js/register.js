const username = document.getElementById("username");
const email = document.getElementById("email");
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const password = document.getElementById("password");
const formRegister = document.getElementById("form");
const politica = document.getElementById("poltica");
formRegister.addEventListener("submit",validarFormulario);

function validarFormulario(e){
  e.preventDefault();
  
  /* variables */
  
  let error = document.getElementById("error");
  let result = false;
  let warnings = "";
  error.innerHTML = "";
  let isChecked = politica.checked;
  /* validación de datos */
  
  if(username.value.length == ""){
     warnings += `El nombre no debe estar vacío <br>`;
     result = true;
  }else if(username.value.length <10){
     warnings += `el nombre es cortó <br>`;
     result = true;
  }else if(username.value.length > 25){
     warnings += `el nombre es largó <br>`;
     result = true;
  }
  if(!emailRegex.test(email.value)){
     warnings +=`El correo electrónico no es válido <br>`;
     result = true;
  }
  if(password.value.length == ""){
     warnings +=`la contraseña no debe estar vacía <br>`;
     result = true;
  }else if(password.value.length <= 8){
     warnings += `debe tener mínimo 8 caracteres la contraseña  <br>`;
     result = true;
  }
  if(!isChecked){
     warnings +=`debes de aceptar los términos y condiciones  <br>`;
     result = true;
  }
  if(result){
     error.innerHTML = warnings;
  }else{
     error.innerHTML = "Te has registrado exitosamente...";
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
