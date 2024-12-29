
const validEmail = "admin@gmail.com";
const validPassword = "admin123";

const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === validEmail && password === validPassword) {
        window.location.href = "dashboard.html"; 
    } else {
        errorMessage.style.display = "block";
    }
});

