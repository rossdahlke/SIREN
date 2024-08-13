function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = 'your_secure_password'; // Change this to your desired password

    if (password === correctPassword) {
        document.getElementById('password-form').style.display = 'none';
        document.getElementById('download-link').style.display = 'block';
    } else {
        alert('Incorrect password. Please try again.');
    }
}