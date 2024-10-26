import Usuario from "./usuario.js";

let datos = [
    new Usuario("usuario1","12345"),
    new Usuario("usuario2","123"),
    new Usuario("usuario3","5678")
]

document.getElementById("iniciaSesion").addEventListener("click",(e)=>{
    e.preventDefault()
    let username = document.getElementById("nombre_usuario");
    let password = document.getElementById("password");
    let msg = "Usuario y/o contraseña incorrectos"
    datos.forEach(
        usuario => {
        if(username.value === usuario.nombre_usuario){
            if(password.value === usuario.password){
                msg = username.value +" Iniciaste Sesión";
                console.log(usuario)
                localStorage.setItem("username",usuario.nombre_usuario);
                localStorage.setItem("contra",usuario.password);
                window.location.href = "./home.html"
                return
            }     
        }
    });
    alert(msg);
    username.value = "";
    password.value = "";
})
