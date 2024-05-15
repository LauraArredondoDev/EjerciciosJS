//EJERCICIO 1. NOTAS DE CLASE DE UN ALUMNO

const notaDelAlumno = 7.5;

//---------NO TOCAR DE AQUÍ PARA ARRIBA----------------------

//Hacer un if en el que: 
//-si el alumno saca menos de un 5, se escriba por consola "suspenso"
//-si el alumno saca de 5 a 7 (ambos incluidos), se escriba por consola "aprobado"
//-si el alumno saca mas de un 7 y hasta un 8, se escriba por consola "notable"
//-si el alumno saca mas de un 8 y hasta un 10, se escriba por consola "sobresaliente"

if (notaDelAlumno >= 0 && notaDelAlumno < 5) {

  console.log('Suspenso');
  
} else if (notaDelAlumno >= 5 && notaDelAlumno <= 7) {
  
  console.log('Aprobado');
  
} else if (notaDelAlumno > 7 && notaDelAlumno <= 8) {
  
  console.log('Notable');
  
} else if (notaDelAlumno > 8 && notaDelAlumno <= 10) {
  
  console.log('Sobresaliente');
  
} else {
  console.log('Luisa hija, las notas van del 0-10, importancia a lo importante');
}

//----------OPTIMIZACIÓN------------------------------------------------------------

if (notaDelAlumno >= 0 && notaDelAlumno < 5) {
  
  console.log('Suspenso');
  
} else if (notaDelAlumno <= 7) {
  
  console.log('Aprobado');
  
} else if (notaDelAlumno <= 8) {
  
  console.log('Notable');
  
} else if (notaDelAlumno <= 10) {
  
  console.log('Sobresaliente');
  
} else {
  console.log('Luisa hija, las notas van del 0-10, importancia a lo importante');
}

//EJERCICIO 2. COMPROBACIÓN DE USUARIO Y CONTRASEÑA

const usuarioCorrecto = 'LauraAC';
const contraseñaCorrecta = '1234A';

const usuarioAportado = 'LauraAC';
const contraseñaAportada = '1234ACND';

//-----------NO TOCAR DE AQUÍ PARA ARRIBA-------------

//Hacer un if en el que:
//-Si tanto el usuario como la contraseña son incorrectos, escriba por consola "Usuario y contraseña erróneos"
//-Si el usuario es incorrecto, escriba por consola "Usuario erróneo"
//-Si la contraseña es incorrecta, escriba por consola "Contraseña errónea"
//-Si el usuario y la contraseña son correctos, escriba por consola "El usuario tiene acceso a la aplicación"

if(usuarioAportado !== usuarioCorrecto && contraseñaAportada !== contraseñaCorrecta) {
  
  console.log('Usuario y contraseña erróneos');
  
} else if(usuarioAportado !== usuarioCorrecto) {
  
  console.log('Usuario erróneo');
  
} else if(contraseñaAportada !== contraseñaCorrecta) {
  
  console.log('Contraseña errónea');
  
} else {
  
  console.log('El usuario tiene acceso a la aplicación');
  
}