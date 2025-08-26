document.getElementById("btn-submit").addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim().toLowerCase();
  const errorEmail = document.getElementById('error-email');

  errorEmail.innerHTML = '';

  let isValid = true;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    errorEmail.innerHTML = 'Please enter email';
    isValid = false;
  } else if (!emailRegex.test(email)) {
    errorEmail.innerHTML = 'Enter a valid email address';
    isValid = false;
  }

  if (!isValid) return;

  const storedUserRaw = localStorage.getItem('myntraUser');

  if (!storedUserRaw) {
    errorEmail.innerHTML = 'No user data found. Please sign up first.';
    return;
  }

  const storedUser = JSON.parse(storedUserRaw);
  const storedEmail = storedUser.email.trim().toLowerCase();

  if (email !== storedEmail) {
    errorEmail.innerHTML = 'Email not found. Please enter the registered email.';
    return;
  }

  window.location.href = "../pages/newpass.html";
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