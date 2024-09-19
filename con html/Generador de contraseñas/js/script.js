let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWYZabcdefghijklmnopqrstuvwyz0123456789!@#$%^&*()';

function generar() {
    
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
        alert('La contraseña es fuerte.');

    }else {
        alert('La contraseña es débil. Asegúrate de incluir al menos una mayúscula, un número y un símbolo.');
    }
}  

//1- Guardarme el boton de limpiar en una const o variable
//2- Hacer una función que diga que cuando pulse el botón lo que hay dentro del input de la contraseña se borre

const botonLimpiar = document.getElementById('limpiar');

function limpiar() {
    contrasena.value = '';
}





