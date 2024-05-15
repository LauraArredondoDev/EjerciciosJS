function cambiarColor(colorNuevo) {
    //Paso 1: obtener el svg y guardarlo en una constante
    const hippo = document.getElementById('hipopotamo');

    //Paso 2: modificar el atributo color del css del svg
    hippo.style.color = colorNuevo;
}