function cambiarClase(clase) {

    const boton = document.getElementById('boton-que-cambia');

    boton.classList.remove('boton-redondo');
    boton.classList.remove('boton-cuadrado');
    boton.classList.add(clase);

    
}