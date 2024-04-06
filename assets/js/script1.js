
// * Variables


const errorNombre = document.querySelector(".errorNombre");
const errorAsunto = document.querySelector(".errorAsunto");
const errorMensaje = document.querySelector(".errorMensaje");

const form = document.querySelector("#formulario");
const resultado = document.querySelector(".resultado");
const enviar = document.querySelector("#botton");



// *  Funciones

function limpiarErrores() {
    errorNombre.innerHTML = "";
    errorAsunto.innerHTML = "";
    errorMensaje.innerHTML = "";
    resultado.innerHTML = "";
}
