const sendData = document.getElementById("send-data");
const showPassword = document.getElementById("show");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
/* form validation */
sendData.addEventListener("click",(e)=>{
  e.preventDefault();
  let parrafo = document.getElementById("errors");
  let entrar = false;
  let warning = "";
  parrafo.innerHTML = "";
  if(username.value.length == ""){
     warning += `el nombre no debe estar vacío <br>`;
     entrar = true;
  }else if(username.value.length < 12){
     warning += `el nombre es corto <br>`;
     entrar = true;
  }else if(username.value.length > 25){
     warning += `el nombre es largo <br>`;
     entrar = true;
  }
  if(!emailRegex.test(email.value)){
     warning += `el email no es válido <br>`;
     entrar = true;
  }
  if(password.value.length == ""){
     warning += `la contraseña no debe estar vacia <br>`;
     entrar = true;
  }else if(password.value.length <8){
     warning += `la contraseña debe tener mínimo 8 carácteres 
     <br>`;
     entrar = true;
  }
  if(entrar){
      parrafo.innerHTML = warning;
   }else{
      parrafo.innerHTML = "Te haz registrado exitosamente...";
   }
});
 /* showPassword password */
showPassword.addEventListener("click",()=>{
      
      if(password.type === "password"){
         password.type = "text";
         showPassword.classList.replace("bx-low-vision","bx-show");
      }else{
         password.type = "password";
         showPassword.classList.replace("bx-show","bx-low-vision");
      };
      
});
