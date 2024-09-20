let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
const contrasenaFuerte = document.getElementById('contrasena__fuerte');
const contrasenaDebil = document.getElementById('contrasena__debil');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWYZabcdefghijklmnopqrstuvwyz0123456789!@#$%^&*()';

function generar() {
    contrasenaFuerte.style.display = 'none';
    contrasenaDebil.style.display = 'none';
    
    let numeroDigitado = parseInt(cantidad.value);

    if(numeroDigitado < 8){
        alert('La cantidad de caracteres tiene que ser mayor que 8');
        return;
    }

    let password ='';

    for(let i = 0; i < numeroDigitado; i++ ) {

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        
        password += caracterAleatorio;

    }

    //Verificar tipos de carácteres
    let tieneMayusculas = /[A-Z]/.test(password);
    let tieneMinusculas = /[a-z]/.test(password);
    let tieneNumeros = /[0-9]/.test(password);
    let tieneSimbolos = /[\W_]/.test(password);


    contrasena.value = password;

    //Validar la fortaleza de la contraseña
    if(tieneMayusculas && tieneMinusculas && tieneNumeros && tieneSimbolos) {
        contrasenaFuerte.style.display = 'block';
    }else {
        contrasenaDebil.style.display = 'block';
    }
}  

//1- Guardarme el boton de limpiar en una const o variable
//2- Hacer una función que cambie el value del input.

const botonLimpiar = document.getElementById('limpiar');

function limpiar() {
    contrasena.value = '';
    contrasenaFuerte.style.display = 'none';
    contrasenaDebil.style.display = 'none';
}





