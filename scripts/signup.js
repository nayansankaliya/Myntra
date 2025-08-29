document.getElementById("btn-submit").addEventListener("click", function (event) {
    event.preventDefault();

    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const contact = document.getElementById("contact").value.trim();
    const password = document.getElementById("password").value.trim();

    if (fname === '' && lname === '' && email === '' && contact === '' && password === '') {
        const errorMsg = 'Please fill all the fields';
        document.getElementById('error-fname').innerHTML = errorMsg;
        document.getElementById('error-lname').innerHTML = errorMsg;
        document.getElementById('error-email').innerHTML = errorMsg;
        document.getElementById('error-contact').innerHTML = errorMsg;
        document.getElementById('error-password').innerHTML = errorMsg;
        return;
    }

    let isValid = true;

    document.getElementById('error-fname').innerHTML = '';
    if (fname === '') {
        document.getElementById('error-fname').innerHTML = 'Please enter first name';
        isValid = false;
    }
    document.getElementById('error-lname').innerHTML = '';
    if (lname === '') {
        document.getElementById('error-lname').innerHTML = 'Please enter last name';
        isValid = false;
    }
    document.getElementById('error-email').innerHTML = '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('error-email').innerHTML = 'Please enter email';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('error-email').innerHTML = 'Enter a valid email address';
        isValid = false;
    }
    document.getElementById('error-contact').innerHTML = '';
    const contactRegex = /^\d{10}$/;
    if (contact === '') {
        document.getElementById('error-contact').innerHTML = 'Please enter contact number';
        isValid = false;
    } else if (!contactRegex.test(contact)) {
        document.getElementById('error-contact').innerHTML = 'Enter a valid 10-digit contact number';
        isValid = false;
    }
    document.getElementById('error-password').innerHTML = '';
    if (password === '') {
        document.getElementById('error-password').innerHTML = 'Please enter password';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('error-password').innerHTML = 'Password must be at least 6 characters';
        isValid = false;
    }

    if (isValid) {
        const userData = {
            fname,
            lname,
            email,
            contact,
            password
        };

        localStorage.setItem('myntraUser', JSON.stringify(userData));

        window.location.href = "../pages/signin.html";
    }
});

const hamburgerBtn = document.getElementById('hamburgerBtn');
const navBar = document.getElementById('main-nav');
const actionBar = document.querySelector('.action_bar');
const signupContainer = document.querySelector('.signup-container');

hamburgerBtn.addEventListener('click', () => {
    navBar.classList.toggle('show');
    actionBar.classList.toggle('show');

    if (signupContainer.style.marginTop === '430px') {
        signupContainer.style.marginTop = '0px';
    } else {
        signupContainer.style.marginTop = '430px';
    }
});
