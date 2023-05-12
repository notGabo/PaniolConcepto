const recoverBtn = document.getElementById('recoverBtn');
const email = document.getElementById('email');

function validarEmail(email) {
    // Expresión regular para validar el formato de un correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


recoverBtn.addEventListener("click", () => {
    if (email.value != ""){
        if (validarEmail(email.value)) {
            Swal.fire({
                title: 'Código Enviado',
                text: 'Código enviado exitosamente, revise su correo.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location = './codePass.html';
                }
            })
        } else {
            Swal.fire(
                'Error',
                'Debe ingresar un correo válido.',
                'error',
              )
        }
    } else {
        Swal.fire(
                        'Error',
                        'Debe ingresar un correo.',
                        'error',
                      )
    }
  })