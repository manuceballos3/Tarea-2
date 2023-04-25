
document.querySelector("#ingresar").onclick = function() {
    let nombreUsuario = document.querySelector("#nombre_usuario").value;
    let segundoNombre = document.querySelector("#segundo_nombre_usuario").value;
    let apellidoUsuario = document.querySelector("#apellido_usuario").value;
    let edadUsuario = document.querySelector("#edad_usuario").value;

    document.querySelector("#datos_usuario").innerHTML= `${nombreUsuario} ${segundoNombre} ${apellidoUsuario} de ${edadUsuario} años`;
    document.querySelector("h1").innerHTML = `¡Bienvenido ${nombreUsuario}!`
}
