function cambiarClase(clase) {

    const boton = document.getElementById('boton-que-cambia');

    if(clase === 'boton-redondo' && !boton.classList.contains(clase)) { //si la clase que se quiere poner es 'boton-redondo' y el boton nno tiene esa clase
        
        boton.classList.remove('boton-cuadrado'); //se borra la clase contraria
        boton.classList.add(clase); //se le añade la nueva clase

    } else if(clase === 'boton-cuadrado' && !boton.classList.contains(clase)) {//si la clase que se quiere poner es 'boton-cuadrado' y el boton no tiene esa clase

        boton.classList.remove('boton-redondo'); //se borra la clase contraria
        boton.classList.add(clase); //se le añade la nueva clase
    }
    
}

//---------------------------------------Otra manera de hacerlo-----------------------------------------

// function borrarClases(btn) {
//     btn.classList.remove('btn-circulo');
//     btn.classList.remove('btn-cuadrado');
// }

// function cambiarClaseCirculo() {
//     const btnCambiaFormaCirculo = document.getElementById('btn-cambia');

//     borrarClases(btnCambiaFormaCirculo);

//     btnCambiaFormaCirculo.classList.add('btn-circulo');

// }

// function btnCambiaClaseCuadrado() {
//     const btnCambiaFormaCuadrado = document.getElementById('btn-cambia');

//     borrarClases(btnCambiaFormaCuadrado);

//     btnCambiaFormaCuadrado.classList.add('btn-cuadrado');
// }