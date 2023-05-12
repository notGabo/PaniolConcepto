const newPassBtn = document.getElementById("newPassBtn");
const pass = document.getElementById("pass");
const pass2 = document.getElementById("pass2");

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

newPassBtn.addEventListener("click", () => {
  console.log("Función ejecutada");
  if (pass.value != "" && pass2.value != "") {
    if (validarPass(pass.value)) {
      if (pass.value === pass2.value) {
        Swal.fire({
          title: "Contraseña Actualizada Exitosamente",
          icon: "success",
          confirmButtonText: "Aceptar",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location = "./index.html";
          }
        });
      } else {
        Swal.fire("Error", "Las contraseñas no coinciden.", "error");
      }
    } else {
      Swal.fire(
        "Error",
        "La contraseña debe ser de mínimo 8 carácteres y con mínimo 3 números.",
        "error"
      );
    }
  } else {
    Swal.fire("Error", "Debe completar los campos.", "error");
  }
});
