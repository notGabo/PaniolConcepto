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

registerBtn.addEventListener("click", () => {

    const usuario = username.value;
    const correo = email.value;
    const contrasena = pass.value;
    const contrasena2 = pass2.value;

    if (usuario != "" && correo != "" && contrasena != "" && contrasena2 != "") {
        if (validarEmail(correo)) {
            if (validarPass(contrasena)) {
                if (contrasena == contrasena2) {
                    Swal.fire({
                        title: 'Cuenta Creada Exitosamente',
                        text: 'Su cuenta se ha registrado exitosamente.',
                        icon: 'success',
                        confirmButtonText: 'Aceptar'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location = "./index.html";
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