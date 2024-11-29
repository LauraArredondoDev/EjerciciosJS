//Mostrar en el input de texto el valor del input de color

//Hacer  una función sin parámetro
//Guardar en una constante cada input
//Añadir al value del input de texto el value del input de color

function mostrarColorElegido() {

    const inputTexto = document.getElementById('input-txt');
    const inputColor = document.getElementById('input-color');

    inputTexto.value = 'El color elegido es: ' + inputColor.value;
}

