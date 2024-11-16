/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
*/

/*Lógica para resolver el ejercicio: */



function primeraLetraMayuscula(parametroFrase) {

    let fraseEnMayusculas = '';

    const listaPalabras = parametroFrase.split(' ');
    for(const palabra of listaPalabras) {
    
        const primeraLetra = palabra[0]; 
        const primeraLetraMayuscula = primeraLetra.toUpperCase(); 
        
        const palabraSinLaPrimeraLetra = palabra.substring(1);
    
        const palabraConPrimeraLetraEnMayusculas = primeraLetraMayuscula + palabraSinLaPrimeraLetra;

        fraseEnMayusculas = fraseEnMayusculas + palabraConPrimeraLetraEnMayusculas + ' ';
    }

    return fraseEnMayusculas;
}

const frase = 'hola me llamo antonio, me voy a duchar';
console.log('Frase original: ' + frase);
console.log('Frase en mayúsculas: ' + primeraLetraMayuscula(frase))
