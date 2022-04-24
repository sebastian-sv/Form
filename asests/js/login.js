const sendData = document.getElementById("send-data");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

sendData.addEventListener("click",(e)=>{
  e.preventDefault();
  const parrafo = document.getElementById("errors");
  let entrar = false;
  warnings = "";
  
  if(!emailRegex.test(email.value)){
     warnings += `El email es invalido <br>`;
     entrar = true;
  }
  if(password.value.length == ""){
    warnings += `La contraseña no debe estar vacía <br>`;
  }else if(password.value.length < 8){
    warnings += `La contraseña es corta <br>`;
    entrar = true;
  }
  if(entrar){
    parrafo.innerHTML = warnings;
  }else{
    parrafo.innerHTML = "has iniciado sesión correctamente";
  }
  
});

 /* showPassword password */
const showPassword = document.getElementById("show");
showPassword.addEventListener("click",()=>{
      
      if(password.type === "password"){
         password.type = "text";
         showPassword.classList.replace("bx-low-vision","bx-show");
      }else{
         password.type = "password";
         showPassword.classList.replace("bx-show","bx-low-vision");
      };
      
});
