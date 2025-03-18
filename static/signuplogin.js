document.addEventListener('DOMContentLoaded', () => {
    // Login form handler
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = this.elements.email.value;
            const password = this.elements.password.value;
            
            // Here you would typically send this data to a server for validation
            console.log('Login attempt:', { email, password });
            alert('Login functionality would be here. Check console for data.');
        });
    }

    // Signup form handler
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = this.elements.username.value;
            const email = this.elements.email.value;
            const password = this.elements.password.value;
            const confirmPassword = this.elements.confirmPassword.value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            // Here you would typically validate data and send to server for user creation
            console.log('Signup attempt:', { username, email, password });
            alert('Signup functionality would be here. Check console for data.');
        });
    }

    // Example of form validation feedback
    const forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
});