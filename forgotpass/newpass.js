document.getElementById("btn-submit").addEventListener("click", function (event) {
    event.preventDefault();

    const newpass = document.getElementById("newpass").value.trim();
    const password = document.getElementById("password").value.trim();

    document.getElementById('error-newpass').innerHTML = '';
    document.getElementById('error-password').innerHTML = '';

    if (newpass === '' && password === '') {
        const errorMsg = 'Please fill all the fields';
        document.getElementById('error-newpass').innerHTML = errorMsg;
        document.getElementById('error-password').innerHTML = errorMsg;
        return;
    }

    let isValid = true;


    if (newpass === '') {
        document.getElementById('error-newpass').innerHTML = 'Please enter Password';
        isValid = false;
    } else if (newpass.length < 6) {
        document.getElementById('error-newpass').innerHTML = 'Password must be at least 6 characters';
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
        window.location.href = "../index.html";
    }
});
