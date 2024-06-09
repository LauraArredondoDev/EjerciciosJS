function expandirColapsar() {
    const caja = document.getElementById('contenedor');

    if (caja.classList.contains('expandir')) { //Si caja tiene la clase expandir que haga:
        caja.classList.remove('expandir');
        caja.classList.add('colapsar');

    }else { // Si no, es que tiene la clase colapsar y hay que quitarla y añadir la clase expandir
        caja.classList.remove('colapsar');
        caja.classList.add('expandir');
    }
}