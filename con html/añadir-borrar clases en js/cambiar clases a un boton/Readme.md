# Cambiar clases a un botón

## Enunciado

Crear tres botones, uno grande y dos pequeños, en los botones pondrá "círculo" y "cuadrado".

Cuando se pulse a cada uno de los botones pequeños, al botón grande se le aplicará una clase que hará que ese botón grande que hará que el botón grande tenga los bordes más redondeados y un color de fondo o los bordes más cuadrados y otro color de fondo distinto.

![alt text](objetivo.gif "Objetivo a conseguir con el ejercicio")

### Pista 1

Cuando se quiere trabajar con las clases de un elemento desde javascript, lo primero siempre es obtener el elemento y guardarlo en una constante y lo siguiente es usar el nombre de la constante, punto y la palabra "classList"

```javascript
const elemento = document.getElementById('id-elemento');
elemento.classList
```

despues de esto, ya podrás usar los métodos que hay para trabajar con las clases, tales como "add()", "remove()" o "contains()"

```javascript
const elemento = document.getElementById('id-elemento');
elemento.classList.add('clase-que-quiero-añadir');
```

### Pista 2

Se puede saber si un elemento ya tiene una clase concreta utilizando el método "contains()" (a este método hay que pasarle el nombre de la clase que se quiere comprobar).

```javascript
const elemento = document.getElementById('id-elemento');
elemento.classList.contains('clase-que-quiero-comprobar');
```

Este método devuelve un true si el elemento contiene la clase que se está comprobando y un false si no la tiene, por lo que se puede utilizar como condición en un if

```javascript
const elemento = document.getElementById('id-elemento');

if(elemento.classList.contains('clase-que-quiero-comprobar')) { //Si el elemento tiene la clase que quiero comprobar si tiene
    //hacer una cosa
} else {
    //hacer otra cosa
}
```

## Solución

1. En primer lugar se deben crear las dos clases CSS que se le van a aplicar al botón, una clase que hará que los bordes del botón serán mas redondeados y que el botón tenga un color de fondo y otra clase que hará que haga que el botón tenga los bordes mas cuadrados y que tenga otro color de fondo distinto.

    ```css
    .boton-redondo {
        background-color: rgb(131, 225, 251);
        border-radius: 30px;
    }

    .boton-cuadrado {
        background-color: rgb(82, 82, 255);
        border-radius: 10px;
    }
    ```

2. En segundo lugar, se debe crear una función que reciba por parámetro el nombre de la clase que se le quiere aplicar al botón grande y que aplique esta nueva clase al botón

    Para ello se debe:

    * Obtener el botón del DOM y guardarlo en una constante
    * Comprobar si el boton no tiene ya la clase que se le está intentando añadir, si no tiene la clase, se le añade, pero previamente se debe borrar la clase contraria. Por ejemplo si al botón se le quiere añadir la clase "boton-redondo" primero se comprueba si no tiene esta clase y si no la tiene, se le borra la clase contraria, es decir, la clase "boton-cuadrado" y posteriormente se le añade la clase que se le quería añadir, que es la clase "boton-redondo"

    ```javascript
    function cambiarClase(clase) {

        const boton = document.getElementById('boton-que-cambia');

        if(clase === 'boton-redondo' && !boton.classList.contains(clase)) { //si la clase que se quiere poner es 'boton-redondo' y el boton nno tiene esa clase
            
            boton.classList.remove('boton-cuadrado'); //se borra la clase contraria
            boton.classList.add(clase); //se le añade la nueva clase

        } else if(clase === 'boton-cuadrado' && !boton.classList.contains(clase)) {//si la clase que se quiere poner es 'boton-cuadrado' y el boton no tiene esa clase

            boton.classList.remove('boton-redondo'); //se borra la clase contraria
            boton.classList.add(clase); //se le añade la nueva clase

        } else { //si el boton no tiene ninguna de las dos clases

            boton.classList.add(clase);

        }   
    }
    ```

3. Por último se debe añadir la llamada a la función en cada uno de los botones pequeños, pasándole a la función el nombre de la clase que se quiere aplicar cuando se pulse en cada uno de los botones.

```html
<button onclick="cambiarClase('boton-redondo')">Círculo</button>
        <button onclick="cambiarClase('boton-cuadrado')">Cuadrado</button>
```
     