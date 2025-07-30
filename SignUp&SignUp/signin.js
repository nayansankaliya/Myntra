document.getElementById("btn-submit").addEventListener("click", function (event) {
    event.preventDefault();


    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();


    document.getElementById('error-email').innerHTML = '';
    document.getElementById('error-password').innerHTML = '';


    if ( email === '' && password === '') {
        const text = 'Please fill all the fields';
        document.getElementById('error-email').innerHTML = text;
        document.getElementById('error-password').innerHTML = text;
        return;
    }

    let isValid = true;

    if (email === '') {
        document.getElementById('error-email').innerHTML = 'Please enter email';
        isValid = false;
    }

    if (password === '') {
        document.getElementById('error-password').innerHTML = 'Please enter password';
        isValid = false;
    }

    if (isValid) {
        window.location.href = "signin.html";
    }
});
