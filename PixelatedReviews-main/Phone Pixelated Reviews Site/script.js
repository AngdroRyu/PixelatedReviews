function toggleVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('toggle-icon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.src = 'Visability.png'; // Change to visibility-on image
    } else {
        passwordInput.type = 'password';
        toggleIcon.src = 'VisibilityOff.png'; // Change to visibility-off image
    }
}