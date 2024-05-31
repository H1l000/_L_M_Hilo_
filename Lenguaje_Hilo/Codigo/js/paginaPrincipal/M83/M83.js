let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
let slideInterval; // Variable para hacer el cambio automático

function muestraFoto(index) {
    if (index < 0) {
        // Si el index es negativo se muestra la última diapositiva
        slideIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        // Si el índice es mayor o igual al número total de diapositivas, muestra la primera diapositiva
        slideIndex = 0;
    } else {
        // Aquí simplemente se establece todo en el índice ahora pasado
        slideIndex = index;
    }

    // Para ocultar todas las diapositivas: necesario con la forma de hacer este carrusel
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = 'none';
    }

    // Muestra la diapositiva actual
    slides[slideIndex].style.display = 'block';
}

// Función a la que se llama desde la página al clickar:
function changeSlide(n) {
    clearInterval(slideInterval); // Detiene el intervalo de cambio automático
    muestraFoto(slideIndex += n); // Muestra la siguiente diapositiva
    slideInterval = setInterval(autoSlide, 3250); // Reinicia el temporizador del cambio automático
}

// Función para cambiar automáticamente la diapositiva
function autoSlide() {
    changeSlide(1);
}

// Inicia el intervalo automático
slideInterval = setInterval(autoSlide, 3250);

// Para mostrar la primera diapositiva al cargar la página
muestraFoto(slideIndex);

// Para cambiar la imagen del anuncio
function cambio() {
    document.getElementById("anuncio").style.backgroundImage = "url(../../img/paginaPrincipal/anuncio3.JPG)";
}

// Event Listener para que, si no se clicka el elemento a, se abra el enlace en una nueva pestaña con el "_blank" :
document.getElementById("anuncio").addEventListener("click", function (event) {
    var clickedElement = event.target;
    if (clickedElement.tagName.toLowerCase() !== 'a' || clickedElement.parentElement.id !== 'anuncio') {
        window.open("https://www.imagin.com/", "_blank");
    }
});
