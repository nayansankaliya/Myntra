document.getElementById("btn-submit").addEventListener("click", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username && email && contact && password) {
        window.location.href = "signin.html";
    } else {
        alert("Please fill  the fields.");
    }
});
