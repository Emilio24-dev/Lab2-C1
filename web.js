
function cambiarColor(elemento) {
    const colores = ["red", "blue", "green", "yellow", "purple"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    elemento.style.backgroundColor = colorAleatorio;
}

function mostrarMensaje(elemento, mensaje) {
    elemento.innerText += mensaje;
}
function ocultarMensaje(elemento) {
    elemento.innerText = "Comida favorita";
}

function cambiarTexto(elemento) {
    elemento.innerText = "Interestelar";
}

function agrandarTexto(elemento) {
    elemento.style.fontSize = "24px";
}

function restaurarTexto(elemento) {
    elemento.style.fontSize = "16px";
}

function mostrarAlerta(event) {
    event.preventDefault();
    alert("Admiro a Nikola Tesla");
}

function cambiarBorde(elemento) {
    elemento.style.border = "2px solid blue";
}
