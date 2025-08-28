let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if (bagItems.length > 0) {
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector('.items-container');
  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = '';
  items.forEach(item => {
    innerHtml += `
    <div class="item-container">
      <img class="item-image" src="${item.image}" alt="item image">
      <div class="rating">          ${item.rating.stars} ⭐ | ${item.rating.count}
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`
  });
  itemsContainerElement.innerHTML = innerHtml;
}


const profileContainer = document.querySelector('.profile-container');
const profileOverlay = document.querySelector('.profile-overlay');

let overlayVisible = false;

profileContainer.addEventListener('mouseenter', () => {
  profileOverlay.style.display = 'flex';
  overlayVisible = true;
});

profileContainer.addEventListener('mouseleave', (e) => {
  setTimeout(() => {
    if (!profileContainer.matches(':hover')) {
      profileOverlay.style.display = 'none';
      overlayVisible = false;
    }
  }, 100);
});

const loginContainer = document.querySelector('.login-container');
const loginOverlay = document.querySelector('.login-overlay');

let infoVisible = false;

loginContainer.addEventListener('mouseenter', () => {
  loginOverlay.style.display = 'flex';
  infoVisible = true;
});

loginContainer.addEventListener('mouseleave', (e) => {
  setTimeout(() => {
    if (!loginContainer.matches(':hover')) {
      loginOverlay.style.display = 'none';
      infoVisible = false;
    }
  }, 100);
});

const hamburgerBtn = document.getElementById('hamburgerBtn');
const navBar = document.getElementById('main-nav');
const actionBar = document.querySelector('.action_bar');
const itemsContainer = document.querySelector('.items-container');

if (hamburgerBtn && navBar && actionBar) {
  hamburgerBtn.addEventListener('click', () => {
    navBar.classList.toggle('show');
    actionBar.classList.toggle('show');

    if (itemsContainer) {
      if (itemsContainer.style.marginTop === '490px') {
        itemsContainer.style.marginTop = '40px';
      } else {
        itemsContainer.style.marginTop = '490px';
      }
    }
  });
}



