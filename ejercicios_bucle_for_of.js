const frutas = ['Sandía', 'Melocotón', 'Fresa'];

for (const elementoLista of frutas) {
  if (elementoLista !== 'Fresa') { //Si elementoLista es distinto a 'Fresa' se muestra por pantalla
    
  console.log(elementoLista);
  }
}

//Crea un array con los nombres de tus amigos y utiliza un bucle for...of para imprimir cada nombre en la consola.

const listaAmigos = ['Laura', 'Lucía', 'Alejandro', 'Antonio'];
for (const amigos of listaAmigos) {
  console.log(amigos);
}

//---------------------------------------------------------------------------------------

//Crea un array con varios números y utiliza un bucle for...of para calcular la suma de todos los números.

const listaNumeros = [10, 20, 30];
let suma = 0;
for (const numero of listaNumeros) {
  console.log('La suma acumulada hasta ahora es: ' + suma);
  console.log('Y se le va a sumar: ' + numero);
  suma += numero;
}
  console.log('La suma es: ' + suma);

//-------------------------------------------------------------------------------------------

//Crea una cadena de texto y utiliza un bucle for...of para contar cuántas vocales hay en la cadena.

const texto = 'Hola mUndo';
let contadorVocales = 0;

for (const letra of texto) {
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u' || letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U') {
    
    contadorVocales++;
  }
}
    console.log('El número de vocales es: ' + contadorVocales);

//------------------------------------------------------------------------------------------

//Crea un array con números y utiliza un bucle for...of para crear un nuevo array que contenga solo los números pares.

const listaNumero = [1, 2, 3, 4, 5];
const listaNumPar = [];

for (const numero of listaNumero) { 
  
  if (numero % 2 === 0) {
  listaNumPar.push(numero);
  }
  
}

console.log('Los números pares son: ' + listaNumPar);

//------------------------------------------------------------------------------------------

//Crea un array con nombres de invitados y utiliza un bucle for...of para generar un mensaje de bienvenida para cada uno.

const listaInvitados = ['Antonio', 'Laura', 'Lucía', 'Alejandro'];

for (const invitado of listaInvitados) {
  console.log ('Bienvenido ' + invitado);
}

//-------------------------------------------------------------------------------------------

//Dado un array de palabras, utiliza for...of para crear un nuevo array que contenga la longitud de cada palabra.

const listaPalabras = ['JavaScript', 'CSS', 'HTML'];
const longitudes = [];

for ( const palabra of listaPalabras) {
  longitudes.push(palabra.length);
}

console.log('La longitud de las palabras es: ' + longitudes);

//--------------------------------------------------------------------------------------------

//Crea un array de números y utiliza for...of para crear un nuevo array que contenga cada número duplicado.

const numeros = [1, 2, 3, 4];
const duplicados = [];

for (const numero of numeros) {
  duplicados.push(numero * 2);
}

console.log('Números duplicados: ' + duplicados);

//--------------------------------------------------------------------------------------------

//Dado un array de palabras, utiliza for...of para crear un nuevo array que contenga todas las palabras en mayúsculas.

const palabras = ['Hola', 'Laura'];
const mayusculas = [];

for (const palabra of palabras) {
  
  mayusculas.push(palabra.toUpperCase());
}
console.log(mayusculas);

//------------------------------------------------------------------------------------------

//Dado un array de palabras, utiliza for...of para crear un nuevo array que contenga solo las palabras que tengan más de 5 letras.

const arrayPalabras = ['Sol', 'Casa', 'Estrella', 'Rinoceronte'];
const palabrasLargas = [];

for (const palabra of arrayPalabras) {
  if (palabra.length > 5) {
    palabrasLargas.push(palabra);
  }
}
console.log('Las palabras más largas son: ' + palabrasLargas);















