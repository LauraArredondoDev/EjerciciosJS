/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
*/

//Lógica para resolverlo:
//ir mirando cada una de las letras de un string y comprobar si están presentes en el otro string
//si no están presentes en el otro string, guardo esa letra en mi string de salida (out1 u out2 según toque)

function eliminarCaracteres(str1, str2) {

    console.log('str1: ' + str1);
    console.log('str2: ' + str2);

    let out1 = '';
    let out2 = '';

    //recorro todas las letras del str1
    for(let i = 0; i <= (str1.length - 1); i++) {
        const letraStr1 = str1[i];

        //si la letra del str1 no está incluida en el str2, entonces la guardo en el out1
        if(!str2.includes(letraStr1)) {
            out1 = out1 + letraStr1;
        }

    }

    //recorro todas las letras del str2
    for(let i = 0; i <= (str2.length - 1); i++) {
        const letraStr2 = str2[i];

        //si la letra del str2 no está incluida en el str1, entonces la guardo en el out2
        if(!str1.includes(letraStr2)) {
            out2 = out2 + letraStr2;
        }

    }

    console.log('Las letras del str1 que no están incluidas en el str2 son: ' + out1);
    console.log('Las letras del str2 que no están incluidas en el str1 son: ' + out2);
}

eliminarCaracteres('hola', 'adios');

//---------------MISMO EJEMPLO HECHO CON FOR OF---------------------

console.log('\n\nMismo ejemplo pero con FOR OF\n\n');


function eliminarCaracteresForOf(str1, str2) {

    console.log('str1: ' + str1);
    console.log('str2: ' + str2);

    let out1 = '';
    let out2 = '';

    //recorro todas las letras del str1
    for(const letra of str1) {

        //si la letra del str1 no está incluida en el str2, entonces la guardo en el out1
        if(!str2.includes(letra)) {
            out1 = out1 + letra;
        }

    }

    //recorro todas las letras del str2
    for(const letra of str2) {

        //si la letra del str2 no está incluida en el str1, entonces la guardo en el out2
        if(!str1.includes(letra)) {
            out2 = out2 + letra;
        }

    }

    console.log('Las letras del str1 que no están incluidas en el str2 son: ' + out1);
    console.log('Las letras del str2 que no están incluidas en el str1 son: ' + out2);
}

eliminarCaracteresForOf('saludo', 'despedida');
