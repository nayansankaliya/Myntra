document.getElementById("btn-submit").addEventListener("click", function (event) {
    event.preventDefault();

    const newpass = document.getElementById("newpass").value.trim();
    const password = document.getElementById("password").value.trim();

    document.getElementById('error-newpass').innerHTML = '';
    document.getElementById('error-password').innerHTML = '';

    let isValid = true;

    if (newpass === '' && password === '') {
        const errorMsg = 'Please fill all the fields';
        document.getElementById('error-newpass').innerHTML = errorMsg;
        document.getElementById('error-password').innerHTML = errorMsg;
        return;
    }

    if (newpass === '') {
        document.getElementById('error-newpass').innerHTML = 'Please enter new password';
        isValid = false;
    } else if (newpass.length < 6) {
        document.getElementById('error-newpass').innerHTML = 'Password must be at least 6 characters';
        isValid = false;
    }

    if (password === '') {
        document.getElementById('error-password').innerHTML = 'Please confirm the password';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('error-password').innerHTML = 'Password must be at least 6 characters';
        isValid = false;
    }

    if (isValid && newpass !== password) {
        document.getElementById('error-password').innerHTML = 'New Passwords and confirm password should be same';
        isValid = false;
    }

    if (isValid) {
        const storedUserRaw = localStorage.getItem('myntraUser');
        if (storedUserRaw) {
            const storedUser = JSON.parse(storedUserRaw);
            storedUser.password = newpass;
            localStorage.setItem('myntraUser', JSON.stringify(storedUser));
        }

        window.location.href = "../pages/signin.html";
    }

});
