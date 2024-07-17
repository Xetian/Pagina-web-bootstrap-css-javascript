

//formulario registro

const nombre = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");


form.addEventListener("submit",e=>{
e.preventDefault()
let warnings = ""
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let entrar = false
parrafo.innerHTML = ""
if (nombre.value.length < 6){
warnings += `El nombre no es valido <br>`
  entrar = true
}

if (!regexEmail.test(email.value)){
    warnings += `El Email no es valido <br>`
      entrar = true
    }
if (pass.value.length <8){
        warnings += `El password no es valido <br>`
          entrar = true
        }

if (warnings){
parrafo.innerHTML = warnings
}else{
    parrafo.innerHTML = "Datos enviados"
}
})




