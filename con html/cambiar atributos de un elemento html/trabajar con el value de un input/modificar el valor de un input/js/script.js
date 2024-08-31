function funcionMuestraColor() {

    const inputColor = document.getElementById('input-color');
    const inputTxt = document.getElementById('input-txt');

    inputTxt.value = 'El color elegido es: ' + inputColor.value;
}