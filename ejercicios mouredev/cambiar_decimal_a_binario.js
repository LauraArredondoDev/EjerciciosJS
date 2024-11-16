/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
*/

//Hacer una funcion 
//Hay que asegurarse de que el resto sea un número entero y no negativo


function cambiarDeDecimalABinario(decimal) {

    let binario = '';

    if(decimal < 0) {
        return 'Error, no se permiten números negativos, solo enteros';
    }

    if(decimal === 0) { //Si el número es 0 se retorna directamente el 0.
        return '0';
    }

    while(decimal > 0) {

        //Obtener el resto de la división entre 2
        let resto = decimal % 2;

        //Asignar el resto a la variable 'binario'
        binario = resto + binario;

        //Dividir el número por 2
        decimal = Math.floor(decimal / 2); //Math.floor() se utiliza para redondear un número hacia abajo
    }

    return binario;
}

console.log(cambiarDeDecimalABinario(10));
console.log(cambiarDeDecimalABinario(0));
console.log(cambiarDeDecimalABinario(255));
console.log(cambiarDeDecimalABinario(-56));