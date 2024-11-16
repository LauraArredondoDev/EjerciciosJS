/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
*/

//Crear una funcion con un parametro
//Dentro de la funcion un bucle for que vaya al revés

function invertirCadena(cadena) {

    let resultado = ''; //Variable vacía para luego guardar el resultado

    for(let i = cadena.length -1; i >= 0; i--) { // comienza en el último índice de la cadena (cadena.length - 1) y se mueve hacia el primer índice (0).

        resultado += cadena[i]; //agrega cada letra a resultado
    }

    return resultado;
}

let texto = 'Hola mundo';

let textoInvertido = invertirCadena(texto);

console.log(textoInvertido);