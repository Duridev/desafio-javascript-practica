
// * Variables

const rojo = document.querySelector("#btn-1");
const naranja = document.querySelector("#btn-2");
const amarillo = document.querySelector("#btn-3");
const verde = document.querySelector("#btn-4");
const celeste = document.querySelector("#btn-5");
const fuxia = document.querySelector("#btn-6");

const caja = document.querySelector("#caja")



// * Funciones

rojo.addEventListener( "click", () => {
    caja.style.backgroundColor= '#e53e3e';
});

naranja.addEventListener( "click", () => {
    caja.style.backgroundColor= '#dd6b20';
});

amarillo.addEventListener( "click", () => {
    caja.style.backgroundColor= '#faf089';
});

verde.addEventListener( "click", () => {
    caja.style.backgroundColor= '#48bb78';
});

celeste.addEventListener( "click", () => {
    caja.style.backgroundColor= '#81e6d9';
});

fuxia.addEventListener( "click", () => {
    caja.style.backgroundColor= '#d53f8c';
});

