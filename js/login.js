const username = document.getElementById('username');
const password = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');

loginBtn.addEventListener('click', () => {
    const user = username.value;
    const pass = password.value;

    if (user === 'admin' && pass === 'admin') {
        window.location = './home.html';
    } else {
        Swal.fire(
            'Credenciales Inválidas',
            'El nombre de usuario o contraseña son incorrectos.',
            'error',
          )
    }
});

registerBtn.addEventListener("click", function() {
  window.location = './register.html';
});