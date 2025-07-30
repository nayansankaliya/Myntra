document.getElementById("btn-submit").addEventListener("click", function (event) {
    event.preventDefault();


    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const contact = document.getElementById("contact");
    const password = document.getElementById("password");


    document.getElementById('error-name').innerHTML = '';
    document.getElementById('error-email').innerHTML = '';
    document.getElementById('error-contact').innerHTML = '';
    document.getElementById('error-password').innerHTML = '';


    if (username === '' && email === '' && contact === '' && password === '') {
        const text = 'Please fill all the fields';
        document.getElementById('error-name').innerHTML = text;
        document.getElementById('error-email').innerHTML = text;
        document.getElementById('error-contact').innerHTML = text;
        document.getElementById('error-password').innerHTML = text;
        return;
    }

    let isValid = true;

    if (username === '') {
        document.getElementById('error-name').innerHTML = 'Please enter name';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('error-email').innerHTML = 'Please enter email';
        isValid = false;
    }

    if (contact === '') {
        document.getElementById('error-contact').innerHTML = 'Please enter contact no';
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
