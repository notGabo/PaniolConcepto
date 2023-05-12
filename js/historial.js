const fechaInput = document.getElementById('fechaInput');
const modificarBtn = document.getElementById('modificarBtn');

fechaInput.addEventListener('change', function() {
  if (fechaInput.value !== '') {
    modificarBtn.disabled = false;
  } else {
    modificarBtn.disabled = true;
  }
});

modificarBtn.addEventListener('click', () => {
    Swal.fire(
        'Modificado Exitosamente',
        'La fecha de devolución del producto ha sido cambiado exitosamente.',
        'success',
      )
})