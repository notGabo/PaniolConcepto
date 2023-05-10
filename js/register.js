const username = document.getElementById('username');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const pass2 = document.getElementById('password2')
const registerBtn = document.getElementById('registerBtn');

registerBtn.addEventListener("click", () => {

    const u = username.value;
    const e = email.value;
    const p = pass.value;
    const p2 = pass2.value;

    console.log({u, e, p, p2})
    if (u != "" && e != "" && p != "" && p2 != "") {
        if (p == p2) {
            console.log('Ta weno')
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
        console.log('Ta malo')
        Swal.fire(
            'Datos Incompletos',
            'Rellene todos los datos.',
            'error',
          )
    }
});