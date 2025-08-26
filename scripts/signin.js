document.getElementById("btn-submit").addEventListener("click", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email").value.trim().toLowerCase();
    const passwordInput = document.getElementById("password").value.trim();

    document.getElementById("error-email").innerText = '';
    document.getElementById("error-password").innerText = '';

    let isValid = true;

    if (emailInput === '') {
        document.getElementById("error-email").innerText = "Please enter email";
        isValid = false;
    }

    if (passwordInput === '') {
        document.getElementById("error-password").innerText = "Please enter password";
        isValid = false;
    }

    if (!isValid) return;

    const storedUserRaw = localStorage.getItem('myntraUser');
    

    if (!storedUserRaw) {
        document.getElementById("error-email").innerText = "No account found. Please sign up first.";
        return;
    }

    const storedUser = JSON.parse(storedUserRaw);
    const storedEmail = storedUser.email.trim().toLowerCase();

    if (emailInput !== storedEmail) {
        document.getElementById("error-email").innerText = "Email doesn't match  records.";
        return;
    }

    if (passwordInput !== storedUser.password) {
        document.getElementById("error-password").innerText = "Incorrect password.";
        return;
    }

    confirm("Login successful!");
    window.location.href = "../index.html"; 
});

const hamburgerBtn = document.getElementById('hamburgerBtn');
const navBar = document.getElementById('main-nav');
const actionBar = document.querySelector('.action_bar');
const signinContainer = document.querySelector('.signin-container');

hamburgerBtn.addEventListener('click', () => {
  navBar.classList.toggle('show');
  actionBar.classList.toggle('show'); 

  if (signinContainer.style.marginTop === '430px') {
    signinContainer.style.marginTop = '0px'; 
  } else {
    signinContainer.style.marginTop = '430px';
  }
});
