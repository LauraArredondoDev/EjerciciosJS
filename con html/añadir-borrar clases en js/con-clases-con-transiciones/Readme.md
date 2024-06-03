# Añadir o eliminar clases con transiciones a un elemento HTML mediante Javascript

## Enunciado

Crear una página con una barra de navegación, esta barra de navegación tendrá un botón hamburguesa que al pulsarlo, mostrará u ocultará una barra de navegación lateral. 

Esta barra se mostrará u ocultará con una transición de 3 segundos.

![alt text](objetivo.gif "Objetivo a conseguir con el ejercicio")

## Solución

En primer lugar se tienen que crear tres clases CSS

* Clase en la que se establezcan las dimensiones de la barra lateral de navegación, se le de un position absolute para que la barra lateral esté flotando por encima de los demás elementos de la página y un transition de 3 segundos para que cuando se le cambie la posición a la barra lateral de navegación lo haga poco a poco a lo largo de 3 segundos en lugar de hacerlo de repente

* Clase en la que se le cambie la posición a la barra lateral de navegación para ocultarla, esto se hace dándole un valor negativo al margin-left y se le tendrá que dar un valor negativo con la cantidad de píxeles que tenga de anchura la barra lateral, de esta manera la barra lateral se moverá a la izquierda y se situará fuera de la ventana y por lo tanto quedará oculta

* Clase en la que se cambie la posición de la barra lateral para mostrarla, esto se hace poniendo el margin-left a 0 píxeles para que la barra se sitúe dentro de la ventana 



~~~
#nav-lat {
    width: 200px;
    height: 100%;
    background-color: burlywood;
    position: absolute;
    transition: all .3s;
}

.nav-lat-oculta {
    margin-left: -200px;
}

.nav-lat-visible {
    margin-left: 0px;
}
~~~

En segundo lugar se debe crear una función en javascript que compruebe si la barra lateral de navegación tiene la clase que oculta la barra y:

* En caso de que tenga la clase que oculta la barra, se borra dicha clase del elemento y se le añade al elemento la clase que muestra la barra

* En caso de que no tenga la clase que oculta la barra, eso significa que tiene la clase que muestra la barra y en cuyo caso se debe eliminar del elemento la clase que muestra la barra y se le debe añadir al elemento la clase oculta la barra

~~~
function mostrarOcultarBarra() {
    const barraLat = document.getElementById('nav-lat');

    if(barraLat.classList.contains('nav-lat-oculta')) {

        barraLat.classList.remove('nav-lat-oculta');
        barraLat.classList.add('nav-lat-visible');
    
    } else {
        barraLat.classList.remove('nav-lat-visible');
        barraLat.classList.add('nav-lat-oculta');
    }
}
~~~

Por último: 

* En el elemento HTML de la barra de navegación lateral se le debe añadir la clase que oculta la barra en caso de que al iniciar la página se desee que la barra esté oculta, o la clase que muestra la barra en caso de que al iniciar la página se desee que la barra esté visible

~~~
<div id="nav-lat" class="nav-lat-oculta"></div>
~~~

* En el boton hamburguesa se debe llamar a la función creada en javascript cuando suceda el evento "click"

~~~
<button onclick="mostrarOcultarBarra()">
    <i class="fa-solid fa-bars"></i>
</button>
~~~