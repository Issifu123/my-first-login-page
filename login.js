document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;

        if (enteredUsername === 'mohammedissifu') {
            if (enteredPassword === 'issifu123') {
                // In a real application, you would redirect to a logged-in page here.
                alert('Login successful!');
                // window.location.href = '/dashboard'; // Example redirection
            } else {
                alert('Wrong password entered.');
            }
        } else {
            alert('Wrong username entered.');
        }
    });
});