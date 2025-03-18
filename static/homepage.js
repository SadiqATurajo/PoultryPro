// Wait for the DOM to be fully loaded before running the JavaScript
document.addEventListener('DOMContentLoaded', (event) => {
    // Example 1: Change text on click
    const welcomeMessage = document.getElementById('welcomeMessage');
    if (welcomeMessage) {
        welcomeMessage.addEventListener('click', function() {
            this.textContent = 'Welcome to Our Amazing Site!';
        });
    }

    // Example 2: Toggle a menu
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('show-menu');
        });
    }

    // Example 3: Simple form validation
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    }
});