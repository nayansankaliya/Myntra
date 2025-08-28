const hamburgerBtn = document.getElementById('hamburgerBtn');
const navBar = document.getElementById('main-nav');
const actionBar = document.querySelector('.action_bar');
const editContainer = document.querySelector('.container');

hamburgerBtn.addEventListener('click', () => {
  navBar.classList.toggle('show');
  actionBar.classList.toggle('show');

  if (editContainer.style.marginTop === '430px') {
    editContainer.style.marginTop = '60px';
  } else {
    editContainer.style.marginTop = '430px';
  }
});

document.getElementById("profileForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Profile details saved successfully!");

  window.location.href = "../index.html";
});