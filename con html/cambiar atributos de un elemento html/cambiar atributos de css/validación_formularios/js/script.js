// function comprobarCampos() {

//     const inputNombre = document.getElementById('nombre');
//     console.log(inputNombre.value);

//     if (inputNombre.value === '') {
//         inputNombre.style.borderColor = 'red';
//     }

//     const inputApellido1 = document.getElementById('apellido1');
//     if (inputApellido1.value === '') {
//         inputApellido1.style.borderColor = 'red';
//     }

//     const inputApellido2 = document.getElementById('apellido2');
//     if (inputApellido2.value === '') {
//         inputApellido2.style.borderColor = 'red';
//     }

//     const inputNacimiento = document.getElementById('nacimiento');
//     if (inputNacimiento.value === '') {
//         inputNacimiento.style.borderColor ='red';
//     }

//     const inputContraseña = document.getElementById('contraseña');
//     if (inputContraseña.value === '') {
//         inputContraseña.style.borderColor = 'red';
//     }

//     const inputTelefono = document.getElementById('telefono');
//     if (inputTelefono.value === '') {
//         inputTelefono.style.borderColor = 'red';
//     }

//     const inputCorreo = document.getElementById('correo');
//     if (inputCorreo.value === '') {
//         inputCorreo.style.borderColor = 'red';
//     }
// }

function comprobarCampos() {
  
    comprobarCampo('nombre', 'smallNombre');
    comprobarCampo('apellido1', 'smallApellido1');
    comprobarCampo('apellido2', 'smallApellido2');
    comprobarCampo('nacimiento', 'smallNacimiento');
    comprobarCampo('contraseña', 'smallContraseña');
    comprobarCampo('telefono', 'smallTelefono');
    comprobarCampo('correo', 'smallCorreo');
}

function comprobarCampo(idInput, idSmall) {
    const input = document.getElementById(idInput);
    const small = document.getElementById(idSmall); 

    if (input.value === '') {
        input.style.borderColor = 'red';
        small.style.display = 'block';
    } else {
        input.style.borderColor = 'green';
        small.style.display = 'none';
    }
}



