function añadirOptionAlSelect() {

    //Crear el elemento Option
    const elementoOptionCreado = document.createElement('option');

    //Añadirle un id al nuevo elemento Option creado
    elementoOptionCreado.id = 'id-de-mi-option';

    //Añadir un contenido de tipo texto al nuevo elemento Option creado
    elementoOptionCreado.innerText = 'Opción 1';

    //Obtener el elemento select por su id
    const select = document.getElementById('id-mi-select');

    //Añadir el nuevo elemento Option como hijo del elemento Select
    select.appendChild(elementoOptionCreado);

    //-------------------------------------------------------------

    //Obtener el input del id que se le va a añadir al nuevo elemento option
    const objetoInputId = document.getElementById('input-id-nuevo-option');

    //Añadirle un id al elemento Option creado
    elementoOptionCreado.id = objetoInputId.value;

    //Obtener el input del contenido que se le va a añadir al nuevo elemento option
    const objetoInputContenido = document.getElementById('id-contenido-nuevo-option');

    //Añadir un contenido de tipo texto dentro de la etiqueta Option creada
    elementoOptionCreado.innerText = objetoInputContenido.value;

}

//A continuación vamos a hacer un ejemplo un poco más elaborado en el que además de lo que ya tenemos en el ejemplo, también haya dos input de tipo texto, en estos input vamos a escribir cuál es el id y el contenido que queremos añadir al nuevo elemento option que vamos a ir creando al pulsar el botón: