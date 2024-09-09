const nuevoElemento = document.createElement('h1');
nuevoElemento.id = 'id-h1';
nuevoElemento.innerText ='Este es el contenido de mi h1';

const div = document.getElementById('id-div');
div.appendChild(nuevoElemento);

console.log({nuevoElemento});

const nuevoElementoParrafo = document.createElement('p');
nuevoElementoParrafo.id = 'id-parrafo';
nuevoElementoParrafo.innerText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum atque possimus tempore temporibus adipisci fugiat amet ad ducimus quaerat voluptas id quia, labore reiciendis placeat eum quisquam deserunt soluta exercitationem?'

div.appendChild(nuevoElementoParrafo);

console.log({nuevoElementoParrafo});