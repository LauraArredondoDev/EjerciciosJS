# Cambiar clases a un botón

## Enunciado

Crear tres botones, uno grande y dos pequeños, en los botones pondrá "círculo" y "cuadrado".

Cuando se pulse a cada uno de los botones pequeños, al botón grande se le aplicará una clase que hará que ese botón grande que hará que el botón grande tenga los bordes más redondeados y un color de fondo o los bordes más cuadrados y otro color de fondo distinto.

![alt text](objetivo.gif "Objetivo a conseguir con el ejercicio")

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

2. En segundo lugar, se debe crear una función que reciba por parámetro cual es la clase  