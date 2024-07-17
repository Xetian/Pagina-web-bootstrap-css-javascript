const tarea = document.getElementById("texto");
const email2= document.getElementById("correo");

const form2 = document.getElementById("form2");
const parrafo2 = document.getElementById("peligro");


form2.addEventListener("submit",c=>{
c.preventDefault()
let warnings = ""
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let entrar = false
parrafo2.innerHTML = ""
if (tarea.value.length < 20){
warnings += `El texto muy corto <br>`
  entrar = true
}

if (!regexEmail.test(email2.value)){
    warnings += `El Email no es valido <br>`
      entrar = true
    }


if (warnings){
parrafo2.innerHTML = warnings
}else{
    parrafo2.innerHTML = "Datos enviados"
}
})