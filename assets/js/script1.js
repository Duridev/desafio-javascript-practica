
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


function validarCampos() {

    const nombre = document.querySelector("#nombre").value;
    const asunto = document.querySelector("#asunto").value;
    const mensaje = document.querySelector("#mensaje").value;


    let valido = true;
    const validar = /[a-zA-Z]/gim;

    // Validar Nombre
    if (!validar.test(nombre)) {
        errorNombre.innerHTML = "El nombre es requerido.";

        valido = false;
    };

    // Validar Asunto
    if (!validar.test(asunto)) {
        errorAsunto.innerHTML = "El asunto es requerido.";

        valido = false;
    };

    // Validar Mensaje
    if (!validar.test(mensaje)) {
        errorMensaje.innerHTML = "El mensaje es requerido.";

        valido = false;
    };

    return valido
}


function exito() {
    limpiarErrores();
    resultado.innerHTML = `Mensaje enviado con éxito !!!`
}




// * Evento Submit - Función Principal

form.addEventListener('submit', function (e) {
    e.preventDefault();
    limpiarErrores();

    const valido = validarCampos();

    if (valido === true) {
        exito();
    };
});