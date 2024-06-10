function expandirColapsar() {
    const caja = document.getElementById('contenedor');
    const icono = document.getElementById('svg');

    if (caja.classList.contains('expandir')) { //Si caja tiene la clase expandir que haga:
        caja.classList.remove('expandir');
        caja.classList.add('colapsar');
        icono.classList.add('rotar-abajo');
        icono.classList.remove('rotar-arriba');

    }else { // Si no, es que tiene la clase colapsar y hay que quitarla y añadir la clase expandir
        caja.classList.remove('colapsar');
        caja.classList.add('expandir');
        icono.classList.add('rotar-arriba');
        icono.classList.remove('rotar-abajo');
    }

}