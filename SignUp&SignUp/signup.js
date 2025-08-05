document.getElementById("btn-submit").addEventListener("click", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const contact = document.getElementById("contact").value.trim();
    const password = document.getElementById("password").value.trim();

    document.getElementById('error-name').innerHTML = '';
    document.getElementById('error-email').innerHTML = '';
    document.getElementById('error-contact').innerHTML = '';
    document.getElementById('error-password').innerHTML = '';

    if (username === '' && email === '' && contact === '' && password === '') {
        const errorMsg = 'Please fill all the fields';
        document.getElementById('error-name').innerHTML = errorMsg;
        document.getElementById('error-email').innerHTML = errorMsg;
        document.getElementById('error-contact').innerHTML = errorMsg;
        document.getElementById('error-password').innerHTML = errorMsg;
        return;
    }

    let isValid = true;

    if (username === '') {
        document.getElementById('error-name').innerHTML = 'Please enter name';
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('error-email').innerHTML = 'Please enter email';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('error-email').innerHTML = 'Enter a valid email address';
        isValid = false;
    }

    const contactRegex = /^\d{10}$/;
    if (contact === '') {
        document.getElementById('error-contact').innerHTML = 'Please enter contact number';
        isValid = false;
    } else if (!contactRegex.test(contact)) {
        document.getElementById('error-contact').innerHTML = 'Enter a valid 10-digit contact number';
        isValid = false;
    }

    if (password === '') {
        document.getElementById('error-password').innerHTML = 'Please enter password';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('error-password').innerHTML = 'Password must be at least 6 characters';
        isValid = false;
    }

    if (isValid) {
        const userData = {
            username,
            email,
            contact,
            password
        };

        localStorage.setItem('myntraUser', JSON.stringify(userData));

        window.location.href = "signin.html";
    }
});
