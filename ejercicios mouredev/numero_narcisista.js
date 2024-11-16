/*
    * Escribe una función que calcule si un número dado es un número de Armstrong
    * (o también llamado narcisista).
    * Si no conoces qué es un número de Armstrong, debes buscar información
    * al respecto.
*/

/* Para que un numero sea narcisista, hay que separar cada uno de sus digitos, 
elevarlos al número de dígitos que tiene el número y sumar sus dígitos elevados.
si la suma es igual al número original, entonces es un número narcisista

153 = 1³ + 5³ + 3³ = 153
*/

//Lógica para resolver el ejercicio:
//1 - primero crearé la variable resultado y la inicializaré a 0
//2 - después transformaré el número a un string para poder ir recorriendo sus dígitos en un for of
//3 - despues en cada iteracion del for donde sacaré el dígito que toque en cada momento, lo transformaré en número
//otra vez para poder elevarlo a la potencia adecuada (la cantidad de dígitos del número original)
//4 - sumaré el número elevado al resultado
//5 - comprobar si la suma total es igual al número original

function esNumeroNarcisista(numeroOriginal) {
    //aqui vamos a ir sumando los numero elevados
    let resultado = 0;

    //transformar el numero original a string para poder recorrer sus digitos dentro de un for of
    //y para poder sacar la longitud del numero original (usando el length) porque lo necesitamos
    //para hacer la potencia
    let numeroOriginalStr = String(numeroOriginal);

    //recorrer cada uno de los dígitos del número original
    for(const digitoStr of numeroOriginalStr) {

        const potenciaALaQueElevarElNumero = numeroOriginalStr.length;

        //transformar el dígito en version string a número porque a continuación vamos a hacer 
        //una operacion matemática con él
        const digitoNum = Number(digitoStr);

        //elevar a una potencia se hace con **
        const numeroElevado = digitoNum ** potenciaALaQueElevarElNumero;

        resultado = resultado + numeroElevado;
    }

    const esIgual = (numeroOriginal === resultado);

    return esIgual;
}

console.log('¿Es el numero 2534 narcisista?: ' + esNumeroNarcisista(2534));
console.log('¿Es el numero 153 narcisista?: ' + esNumeroNarcisista(153));