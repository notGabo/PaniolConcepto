const codeBtn = document.getElementById('codeBtn');
const code = document.getElementById('code');

codeBtn.addEventListener("click", () => {
    console.log("Función ejecutada")
    if (code.value != ""){
        Swal.fire({
            title: 'Código Correcto',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = './newPass.html';
            }
        })
    } else {
        Swal.fire(
          'Error',
          'El código ingresado es incorrecto.',
          'error',
        )
    }
  })