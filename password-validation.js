document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.querySelector('input[type="password"]');
    const passwordValidationMsg = document.createElement('div');
    passwordValidationMsg.classList.add('password-validation-msg');
    passwordInput.parentElement.appendChild(passwordValidationMsg);

    passwordInput.addEventListener('input', function() {
        const password = passwordInput.value;
        const validationResult = validatePassword(password);
        passwordValidationMsg.innerHTML = validationResult;
    });

    function validatePassword(password) {
        const validationMessages = [];
        const regexLowercase = /[a-z]/;
        const regexUppercase = /[A-Z]/;
        const regexNumber = /[0-9]/;
        const regexSpecial = /[!@#$%^&*(),.?":{}|<>]/;

        if (password.length < 8) {
            validationMessages.push("Password must be at least 8 characters long.");
        }
        if (!regexLowercase.test(password)) {
            validationMessages.push("Password must contain at least one lowercase letter.");
        }
        if (!regexUppercase.test(password)) {
            validationMessages.push("Password must contain at least one uppercase letter.");
        }
        if (!regexNumber.test(password)) {
            validationMessages.push("Password must contain at least one number.");
        }
        if (!regexSpecial.test(password)) {
            validationMessages.push("Password must contain at least one special character.");
        }

        if (validationMessages.length === 0) {
            return '<span style="color: green;">Password is strong!</span>';
        } else {
            return validationMessages.join('<br>');
        }
    }
});
