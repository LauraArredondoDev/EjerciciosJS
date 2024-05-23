function mostrarOcultarBarra() {
    //Paso 1: obtener la barra lateral y guardarla en una constante
    const barraLat = document.getElementById('nav-lat');

    //Paso 2: hacer un if que compruebe si la barra lateral tiene la clase .nav-lat-oculta
    if(barraLat.classList.contains('nav-lat-oculta')) {
        //Paso 3: dentro de ese if hacer que si tiene la clase .nav-lat-oculta se le
        //borre esa clase y se le añada la clase .nav-lat-visible
        //y si no que se le borre la clase .nav-lat-visible y se le añada la clase .nav-lat-oculta
        barraLat.classList.remove('nav-lat-oculta');
        barraLat.classList.add('nav-lat-visible');
    
    } else {
        barraLat.classList.remove('nav-lat-visible');
        barraLat.classList.add('nav-lat-oculta');
      }
}