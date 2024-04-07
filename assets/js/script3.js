
// * Variables

const valor1 = document.querySelector("#valor1");
const valor2 = document.querySelector("#valor2");
const resultado = document.querySelector(".resultado")

const sumar = document.querySelector('#btn-sumar');
const restar = document.querySelector('#btn-restar');

sumar.addEventListener( "click", () => {    
    const num1 = parseInt(valor1.value);  
    const num2 = parseInt(valor2.value);

    const respSuma = num1 + num2;
    
    limpiarCampos()

    if (respSuma >= 0) {
        resultado.textContent = respSuma;
    } else {
        resultado.textContent = "0"
    }

});

restar.addEventListener( "click", () => {    
    const num1 = parseInt(valor1.value);  
    const num2 = parseInt(valor2.value);

    const respResta = num1 - num2;
    
    limpiarCampos()

    if (respResta >= 0) {
        resultado.textContent = respResta;
    } else {
        resultado.textContent = "0"
    }

});

