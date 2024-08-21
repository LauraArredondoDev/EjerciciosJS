//Consumo de Combustible: Crea un script que solicite al usuario el número de kilómetros recorridos por su coche y el número de litros consumidos. Luego, muestra el consumo de combustible por kilómetro, que se calcula dividiendo el número de litros entre el número de kilómetros 

function consumo (litrosConsumidos, kmRecorridos) {
  
  const combustiblePorKm = kmRecorridos/litrosConsumidos;
  
  console.log(combustiblePorKm);
}

consumo(50, 20000);

//---------------------------------------------------------------------------------------------

//Suma de Números: Crea una función que reciba dos números como parámetros y retorne su suma. Luego, pide al usuario que ingrese dos números y muestra el resultado.

function sumar (numero1, numero2) {
  
  const suma = numero1 + numero2;
  
  return suma;
}

sumar(5, 10);

//---------------------------------------------------------------------------------------------

//Contar Caracteres: Escribe una función que reciba una cadena de texto y cuente cuántos caracteres tiene. Muestra el resultado en la consola.

function cadenaTexto(texto) {

  const numeroCaracteres = texto.length;
  
  console.log('La cadena tiene ' + numeroCaracteres + ' caracteres');
} 

cadenaTexto('Hola mundo');

//--------------------------------------------------------------------------------------------

const txt1 = 'Este es el principio';
const txt2 = 'Este es el final';
const txt3 = txt1 + ' ' + txt2;

console.log(txt3);

//------------------------------------------------------------------

// Hacer un conversor de euros a dólares. Tendremos una constante llamada euros en la que el valor estará inicializado con valor 7. Debemos calcular ese valor en dólares. Supondremos que un euro son dos dólares.

const euros = 7;
const dolares = euros * 2;

console.log(dolares);

//------------------------------------------------------------------

//El IVA para ciertos artículos es del 21%. Realiza un programa que a partir de una constante precio inicializada con valor 100, calcule el precio con IVA.

const precio = 100;
const precioConIva = 1.21 * precio;

console.log(precioConIva);

//-----------------------------------------------------------------

//Realiza un programa que a partir de los valores constantes, ancho=4 y alto=7, calcule el área de un rectángulo. Recuerda que el area de un rectángulo es ancho por alto.

const ancho = 4;
const alto = 7;
const areaRectangulo = ancho * alto;

console.log(areaRectangulo);

//-------------------------------------------------------------

//Hacer un conversor de grados centígrados a grados Fahrenheit. Para ello deberé multiplicar los grados centígrados por 9/5 y sumar 32. Para comprobar que hemos hecho los cálculos correctamente, partiremos de una constante llamada centigrados que valdrá 20. En este caso, los grados fahrenheit deberían ser 68.


const centigrados = 20;
const fahrenheith = (centigrados * 9/5) + 32;

console.log(fahrenheith);

//------------------------------------------------------------

const nombre = 'Juan';
const material = 'madera';
const dimensiones = 'diminutas';
const comentario = 'Que sea bonita, pero de una belleza estraña, indómita';

console.log(nombre + ' ha pedido una caja de ' + material + ' con unas dimensiones ' + dimensiones + ' ' + comentario);

//--------------------------------------------------------------

//Ejemplo práctico: se quiere hacer una compra por internet y para ello hay que comprobar que la persona que quiere hacer la compra sea mayor de edad y que además tenga dinero en el banco.

const edad = 20;
const cantidadDinero = 100;

const mayorEdad = edad >= 18;
const tieneDinero = cantidadDinero > 0;
console.log(mayorEdad);
console.log(tieneDinero);

mayorEdad && tieneDinero;

//Ejemplo práctico: La misma persona de antes que quiere hacer una compra por internet necesita tener una tarjeta de débito o de crédito para efectuar la compra (si tiene ambas también vale porque podría usar cualquiera de ellas para efectuar la compra).

const tarjetaDevito = true;
const tarjetaCredito = false;

tarjetaCredito || tarjetaDevito;

if ( mayorEdad && tieneDinero) {
  console.log('Puede comprar por internet');
  
}else {
  console.log(`NO puede comprar por internet`)
}

//---------------------------------------------------------------------------------

//Sumar todos los Elementos de un Array: Escribe una función que reciba un array de números y retorne la suma de todos sus elementos.



















