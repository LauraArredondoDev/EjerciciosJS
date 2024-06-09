function cambiarClase(clase) {

    const boton = document.getElementById('boton-que-cambia');

    if(clase === 'boton-redondo' && !boton.classList.contains(clase)) { //si la clase que se quiere poner es 'boton-redondo' y el boton nno tiene esa clase
        
        boton.classList.remove('boton-cuadrado'); //se borra la clase contraria
        boton.classList.add(clase); //se le añade la nueva clase

    } else if(clase === 'boton-cuadrado' && !boton.classList.contains(clase)) {//si la clase que se quiere poner es 'boton-cuadrado' y el boton no tiene esa clase

        boton.classList.remove('boton-redondo'); //se borra la clase contraria
        boton.classList.add(clase); //se le añade la nueva clase

    } else { //si el boton no tiene ninguna de las dos clases

        boton.classList.add(clase);

    }
    
}