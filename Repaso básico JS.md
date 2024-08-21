# Repaso básico de javascript

1. [Funciones](#funciones)
2. [Objetos](#objetos)

## Funciones<a id="funciones"></a>

1. [Funciones con nombre](#funcionesConNombre)
2. [Funciones sin nombre/anónimas/lambda](#funcionesAnonimas)
3. [Funciones que devuelven algo (return)](#funcionesConReturn)

### Funciones con nombre <a id="funcionesConNombre"></a>

#### Sin parámetros

```javascript
function funcionSinParametros() {
  console.log('Soy una función sin parámetros');
}

funcionSinParametros();
```

#### Con parámetros

```javascript
function funcionParametros(anioActual, anioNacimiento) {
  const edad = anioActual - anioNacimiento;
  console.log('Mi edad es ' + edad );
}

funcionParametros(2024, 1997);
```

### Funciones sin nombre/anónimas/lambda<a id="funcionesAnonimas"></a>

#### Sin parámetros

##### Forma antigua

```javascript
const funcionDentroConstante = function () {
  console.log('Soy una función sin parámetros y anónima');
}

funcionDentroConstante();
```

##### Forma moderna

```javascript
const funcionDentroConstanteModerna = () => {
  console.log('Soy una función sin parámetros, anónima y dentro de una constante de manera moderna');
}

funcionDentroConstanteModerna();
```

#### Con parámetros

##### Forma antigua

```javascript
const funcionDentroConstanteConParametros = function (anioActual, anioNacimiento) {
   const edad = anioActual - anioNacimiento;
  console.log('funcionDentroConstanteConParametros: Mi edad es ' + edad );
}
funcionDentroConstanteConParametros(2024, 1997);
```

##### Forma moderna

###### Con un solo parámetro

```javascript
const decirMiNombre = (nombre) => {
  console.log('Hola mi nombre es ' + nombre);
}

decirMiNombre('Laura');
```

```javascript
const decirMiNombre = nombre => { //como solo tiene un parámetro, no hace falta poner el parámetro entre paréntesis
  console.log('Hola mi nombre es ' + nombre);
}

decirMiNombre('Laura');
```

###### Con varios parámetros

```javascript
const funcionDentroConstanteModernaParametros = (anioActual, anioNacimiento) => {
   const edad = anioActual - anioNacimiento;
  console.log(' funcionDentroConstanteModernaParametros: Mi edad es ' + edad );
} 

funcionDentroConstanteModernaParametros(2024, 1997);
```

### Funciones que devuelven algo (return)<a id="funcionesConReturn"></a>

```javascript
//Esto es una funcion que recibe dos parámetros
function calcularEdad(añoActual, añoNacimiento) {
  return añoActual - añoNacimiento; //aquí la función está devolviendo (con el return) la resta de los dos parámetros
}
const edad = calcularEdad(2024, 1997); //aquí se llama a la función, la función devuelve la resta de los dos parámetros y esto que devuelve se guarda en una constante

console.log('Mi edad es ' + edad); //aquí se escribe por consola un texto al que se le añade lo que hay dentro de la constante edad
```

## Objetos<a id="objetos"></a>

```javascript
const antonio = { //todo esto es un objeto
  nombre: 'Antonio', //esto es una variable que contiene un texto
  apellido1: 'Cortés', //esto es una variable que contiene un texto
  apellido2: 'López', //esto es una variable que contiene un texto
  edad: 29, //esto es una variable que contiene un numero
  saludarDentroDeVariable: nombreSaludo => { //esto es una variable que contiene una funcion anónima con un parámetro
      console.log('Hola ' + nombreSaludo + ', mi nombre es Antonio');
  }
}

console.log(antonio);

console.log(antonio.nombre + ' ' + antonio.edad + ' ' + antonio.apellido1);

antonio.saludarDentroDeVariable('Laura'); //esto escribe por consola "Hola Laura, mi nombre es Antonio"
```