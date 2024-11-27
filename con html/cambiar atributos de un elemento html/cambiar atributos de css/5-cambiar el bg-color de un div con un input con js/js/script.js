//Al seleccionar un color en el input todos los divs tienen que ponerse de ese color.

//Hacer una función sin parámetro.
//Guardar en una constante los div con la clase cuadrado.
//Guardar en una variable el input.
//Usar el value del input.

function cambiarColorDiv() {

    document.querySelectorA('.')

    const listaCuadrado = document.getElementsByClassName('cuadrado');
    const inputColor = document.getElementById('input-color');

    for(const cuadrado of listaCuadrado) {

        cuadrado.style.backgroundColor = inputColor.value;

    }

}
