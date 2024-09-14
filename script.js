// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const usernameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');
    
    // Form submit event
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Validate form
        if (username === '' || password === '') {
            showErrorMessage('Both fields are required');
        } else {
            // Here you can handle the login logic, like sending the data to the server
            console.log('Username:', username);
            console.log('Password:', password);
            showSuccessMessage('Login successful!');
        }
    });

    // Show error message
    function showErrorMessage(message) {
        let errorBox = document.querySelector('.error-message');
        if (!errorBox) {
            errorBox = document.createElement('div');
            errorBox.classList.add('error-message');
            errorBox.style.color = '#ff4d4d';
            errorBox.style.textAlign = 'center';
            errorBox.style.marginBottom = '20px';
            form.prepend(errorBox);
        }
        errorBox.textContent = message;
    }

    // Show success message
    function showSuccessMessage(message) {
        let successBox = document.querySelector('.success-message');
        if (!successBox) {
            successBox = document.createElement('div');
            successBox.classList.add('success-message');
            successBox.style.color = '#4caf50';
            successBox.style.textAlign = 'center';
            successBox.style.marginBottom = '20px';
            form.prepend(successBox);
        }
        successBox.textContent = message;
    }
});
