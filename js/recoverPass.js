// const nodemailer = require("nodemailer");

// // Configuración del servicio de correo electrónico
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'fernandofailed@gmail.com',
//     pass: '04@_K4MuzLy?2003.'
//   }
// });

// function codeGenerator() {
//     return Math.floor(Math.random() * 10000).toString().padStart(4, '0');
// }

// function enviarCorreoConfirmacion(destinatario) {
//     const codigo = codeGenerator();
  
//     const mailOptions = {
//       from: 'fernandofailed@gmail.com',
//       to: destinatario,
//       subject: 'Código de confirmación.',
//       text: `Debes ingresar el siguiente código de verificación: ${codigo}
//       El código expirará 10 minutos después de ser recibido.`
//     };
  
//     transporter.sendMail(mailOptions, function(error, info) {
//       if (error) {
//         console.error(error);
//         Swal.fire(
//             'Error',
//             'Revise el correo ingresado.',
//             'error',
//           )
//       } else {
//         console.log('Correo enviado: ' + info.response);
//         Swal.fire(
//             'Código Enviado',
//             'Código enviado exitosamente, revise su correo.',
//             'success',
//           )
//         // window.location = './.html';
//       }
//     });
//   }

// const recoverBtn = document.getElementById('recoverBtn');
// const email = document.getElementById('email');

// recoverBtn.addEventListener("click", () => {
//     console.log(email.value)
//     console.log("Función ejecutada")
//     if (email.value != "") {
//         enviarCorreoConfirmacion(email.value);
//     } else {
//         Swal.fire(
//             'Error',
//             'Debe ingresar un correo válido.',
//             'error',
//           )
//     }
//   })

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