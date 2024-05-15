function cambiarImg(nuevoSrc) {
    //Paso 1: obtener el div y guardarlo en una constante
    const div = document.getElementById('img-top');

    //Paso 2: modificar la variable backgroundImage que está dentro del objeto style que está dentro del objeto que representa al div 
    //y que se ha guardado en la constante, se le tiene que cambiar el valor a esa variable backgroundImage y ponerle como nuevo valor
    //un string que sea 'url(nueva_ruta_a_la_imagen)'
    div.style.backgroundImage = 'url(' + nuevoSrc + ')';
}