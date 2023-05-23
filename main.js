
document.querySelector("#ingresar").onclick = function() {
    const nombreUsuario = document.querySelector("#nombre-usuario").value;
    const segundoNombre = document.querySelector("#segundo-nombre-usuario").value;
    const apellidoUsuario = document.querySelector("#apellido-usuario").value;
    const edadUsuario = document.querySelector("#edad-usuario").value;

    document.querySelector("#datos-usuario").innerHTML= `${nombreUsuario} ${segundoNombre} ${apellidoUsuario} de ${edadUsuario} años`;
    document.querySelector("h1").innerHTML = `¡Bienvenido ${nombreUsuario}!`
}
