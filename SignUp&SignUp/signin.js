document.getElementById("btn-submit").addEventListener("click", function () {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert('Please fill the field');
    } else {
        alert('SignIn Successful');
    }
});