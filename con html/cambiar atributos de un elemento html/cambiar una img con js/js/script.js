function cambiarImg(nuevoSrc) {
    //Paso 1: obtener la imagen grande y guardarla en una constante
    const imgGrande = document.getElementById('img-grande');
    
    //Paso 2: modificar la variable src del objeto que representa a la imagen grande y que se ha guardado en la constante, se le tiene que cambiar
    //el valor y poner como nuevo valor el valor que ha recibido la función por parámetro
    imgGrande.src = nuevoSrc;
}