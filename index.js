function noDisabled1() {
    email = document.querySelector("#email").value
    pass = document.querySelector("#pass").value
    



    if (email.length > 0 && pass.length > 0) {
        document.querySelector("#btnsubmit").className = "btn btn-primary"
    } else {
        document.querySelector("#btnsubmit").className = "btn btn-primary disabled"
    }


}
    
function noDisabled2(){

    nombre = document.querySelector("#nombre").value
    apellido = document.querySelector("#apellido").value
    Femail = document.querySelector("#Femail").value
    password = document.querySelector("#password").value
    pais = document.querySelector("#pais").value
    fechaNacimiento = document.querySelector("#fechaNacimiento").value
 
    

    if (nombre.length > 0 && apellido.length > 0 && Femail.length > 0 && password.length > 0 && pais.length > 0 && fechaNacimiento.length > 0 ) {
        document.querySelector("#btnsubmit1").className = "btn btn-primary"
    } else {
        document.querySelector("#btnsubmit1").className = "btn btn-primary disabled"
    }
}



