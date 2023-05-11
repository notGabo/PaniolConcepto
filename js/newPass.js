const newPassBtn = document.getElementById('newPassBtn');
const pass = document.getElementById('pass');
const pass2 = document.getElementById('pass2');

newPassBtn.addEventListener("click", () => {
    console.log("Función ejecutada")
    if (pass.value != "" && pass2.value != ""){
        if (pass.value === pass2.value) {
            Swal.fire({
                title: 'Contraseña Actualizada Exitosamente',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location = './login.html';
                }
            })
        } else {
            Swal.fire(
                'Error',
                'Las contraseñas no coinciden.',
                'error',
              )
        }
    } else {
        Swal.fire(
          'Error',
          'Debe completar los campos.',
          'error',
        )
    }
  })