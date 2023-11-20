const imagenes = [
    "HISTORIA.jpg",
    "logo.png",
    "imagen1.jpg",
    // Agrega aquí más nombres de imágenes según sea necesario
];
let imagenActual = 0;

const imagenRotativa = document.getElementById("imagenRotativa");

function mostrarImagen() {
    imagenRotativa.src = `img/${imagenes[imagenActual]}`;
}

function cambiarImagen(direccion) {
    imagenActual = (imagenActual + direccion + imagenes.length) % imagenes.length;
    mostrarImagen();
}

function autoCambiarImagen() {
    cambiarImagen(1);
}

// Mostrar la primera imagen al cargar la página
mostrarImagen();

// Cambiar automáticamente de imagen cada 5 segundos (5000 milisegundos)
setInterval(autoCambiarImagen, 4000);
