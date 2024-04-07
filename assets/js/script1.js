
// * Variables

const nombre = document.querySelector("#nombre");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");

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

    let valido = true;
    const validar = /[a-zA-Z]/gim;

    // Validar Nombre
    if (!validar.test(nombre.value)) {
        errorNombre.innerHTML = "El nombre es requerido.";

        valido = false;
    };

    // Validar Asunto
    if (!validar.test(asunto.value)) {
        errorAsunto.innerHTML = "El asunto es requerido.";

        valido = false;
    };

    // Validar Mensaje
    if (!validar.test(mensaje.value)) {
        errorMensaje.innerHTML = "El mensaje es requerido.";

        valido = false;
    };

    return valido
}


function exito() {
    limpiarErrores();
    resultado.innerHTML = `Mensaje enviado con éxito !!!`
}

function limpiarCampos() {
    nombre.value = "";
    mensaje.value = "";
    asunto.value = "";
}



// * Evento Submit - Función Principal

form.addEventListener('submit', function (e) {
    e.preventDefault();
    limpiarErrores();

    const valido = validarCampos();

    if (valido === true) {
        exito();
        // Uso un setTimeOut porque pienso que es cómodo que los datos
        // se limpien luego de enviarlos, pero en el pdf del desafío,
        // se muestra que siguen puestos luego de mostrar el mensaje de exito.
        // asi que quise hacer ambas cosas xD
        setTimeout(() => {
            limpiarCampos();
        }, 2000);

    };
});