/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
*/

/*Lógica para resolver el ejercicio: 
    1 - separar la frase en una lista de palabras con la función split() y utilizando el espacio que hay entre cada palabra como separador.
    2 - crear una variable llamada fraseEnMayusculas donde voy a ir guardando las palabras con la primera letra en mayúscula y separadas
        por un espacio
    3 - recorrer la la lista de palabras con un bucle for of
        En cada iteración del bucle:
            - Obtengo la primera letra de la palabra, la paso a mayúsculas y la guardo en una constante
            - Obtengo el resto de la palabra si la primera legra y la guardo en una constante
            - Concateno la primera letra de la palabra en mayúsculas con el resto de la palabra y la guardo en una constante
            - Le concateno a mi variable fraseEnMayusculas la palabra con la primera letra en mayúsculas y le añado un espacio al final
              para que la siguiente palabra no esté pegada a la que acabo de añadir
*/



function primeraLetraMayuscula(parametroFrase) {

    //Declaro la variable donde voy a ir guardando las palabras con la primera letra en mayúsculas
    let fraseEnMayusculas = '';

    //Separar la frase en una lista de palabras utilizando el espacio como separador
    const listaPalabras = parametroFrase.split(' ');

    for(const palabra of listaPalabras) {
    
        //Obtener la primera letra de la palabra y pasarla a mayúsculas
        const primeraLetra = palabra[0]; 
        const primeraLetraMayuscula = primeraLetra.toUpperCase(); 
        
        //Obtener el resto de la palabra sin la primera letra
        const palabraSinLaPrimeraLetra = palabra.substring(1);
    
        //Concatenar la primera letra en mayúsculas con el resto de la palabra
        const palabraConPrimeraLetraEnMayusculas = primeraLetraMayuscula + palabraSinLaPrimeraLetra;

        //Concatenar la palabra con la primera letra en mayúsculas a mi variable donde voy guardando las palabras y añadir un espacio después de la palabra
        fraseEnMayusculas = fraseEnMayusculas + palabraConPrimeraLetraEnMayusculas + ' ';
    }

    //Devolver la frase con la primera letra de cada palabra en mayúsculas
    return fraseEnMayusculas;
}

const frase = 'hola me llamo antonio, me voy a duchar';
console.log('Frase original: ' + frase);
console.log('Frase en mayúsculas: ' + primeraLetraMayuscula(frase))
