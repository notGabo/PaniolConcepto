const username = document.getElementById('username');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const pass2 = document.getElementById('password2')
const registerBtn = document.getElementById('registerBtn');

function validarEmail(email) {
    // Expresión regular para validar el formato de un correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarPass(pass) {
    // Validar longitud de al menos 8 caracteres
    if (pass.length < 8) {
      return false;
    }
  
    // Validar al menos 3 números
    const digitos = pass.match(/\d/g);
    if (digitos === null || digitos.length < 3) {
      return false;
    }
  
    return true;
}

// const btnMostrar = document.getElementById('mostrarContrasena');
// const inputContrasena = document.getElementById('contrasena');

// btnMostrar.addEventListener('click', function() {
//   if (inputContrasena.type === 'password') {
//     inputContrasena.type = 'text';
//     btnMostrar.textContent = 'Ocultar';
//   } else {
//     inputContrasena.type = 'password';
//     btnMostrar.textContent = 'Mostrar';
//   }
// });

registerBtn.addEventListener("click", () => {

    const u = username.value;
    const e = email.value;
    const p = pass.value;
    const p2 = pass2.value;

    if (u != "" && e != "" && p != "" && p2 != "") {
        if (validarEmail(e)) {
            if (validarPass(p)) {
                if (p == p2) {
                    Swal.fire({
                        title: 'Cuenta Creada Exitosamente',
                        text: 'Su cuenta se ha registrado exitosamente.',
                        icon: 'success',
                        confirmButtonText: 'Aceptar'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location = "./login.html";
                        }
                    })
                } else {
                    Swal.fire(
                        'Las contraseñas no son iguales.',
                        'Verifique que ambas contraseñas sean idénticas.',
                        'error',
                    )
                }
            } else {
                Swal.fire(
                    'Error',
                    'La contraseña debe ser de mínimo 8 carácteres y con mínimo 3 números.',
                    'error',
                )
            }
        } else {
            Swal.fire(
                'Error',
                'Debe ingresar un correo válido.',
                'error',
              )
        }
      } else {
        Swal.fire(
            'Datos Incompletos',
            'Rellene todos los datos.',
            'error',
          )
    }
});