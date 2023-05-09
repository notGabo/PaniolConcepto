const username = document.getElementById('username');
const password = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', () => {
    const user = username.value;
    const pass = password.value;

    if (user === 'admin' && pass === 'admin') {
        window.location = './home.html';
    } else {
        alert('Usuario o contraseña invalida');
    }
});