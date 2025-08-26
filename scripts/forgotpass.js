document.getElementById("btn-submit").addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim().toLowerCase();

    document.getElementById('error-email').innerHTML = '';


    if (email === '') {
        const errorMsg = 'Please enter email';
        document.getElementById('error-email').innerHTML = errorMsg;
        return;
    }

    let isValid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('error-email').innerHTML = 'Please enter email';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('error-email').innerHTML = 'Enter a valid email address';
        isValid = false;
    }


    if (isValid) {
        window.location.href = "../pages/newpass.html";
    }
});
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navBar = document.getElementById('main-nav');
const actionBar = document.querySelector('.action_bar');
const forgotpassContainer = document.querySelector('.forgotpass-container');

hamburgerBtn.addEventListener('click', () => {
  navBar.classList.toggle('show');
  actionBar.classList.toggle('show'); 

  if (forgotpassContainer.style.marginTop === '430px') {
    forgotpassContainer.style.marginTop = '0px'; 
  } else {
    forgotpassContainer.style.marginTop = '430px';
  }
});