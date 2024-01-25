let shareButtons = document.querySelectorAll('.share');
let contactButton = document.querySelector('.contact-btn');
let formPopUp = document.querySelector('.form-popup'); 
let exitButton = document.querySelector('.exit'); 
let popUpInputs = document.querySelectorAll('.input-border');
let popUpBtn = document.querySelector('.popup-contact-btn');
let hamburgerMenu = document.querySelector('.hamburger');
let navMenu = document.querySelector('.nav-menu');
let links = document.querySelectorAll('.nav-link');
let cards = document.querySelectorAll('.card');
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let url = '';

shareButtons.forEach((shareButton) => {
  shareButton.onclick = () => {
    const href = window.location.href;
    navigator.clipboard.writeText(href);
    
    const messageDiv = document.createElement('div');
    messageDiv.textContent = 'Copied to clipboard';
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '50%';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translate(-50%, -50%)';
    messageDiv.style.background = 'rgba(0, 0, 0, 0.7)';
    messageDiv.style.color = '#fff';
    messageDiv.style.padding = '10px 20px';
    messageDiv.style.borderRadius = '5px';
    messageDiv.style.zIndex = '9999';
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
      document.body.removeChild(messageDiv);
    }, 1500);
  };
});

links.forEach(link => link.onclick = () => {
  hamburgerMenu.classList.remove('active')
  navMenu.classList.remove('active')
});

contactButton.onclick = () => {
  formPopUp.classList.remove('form-display');
  formPopUp.style.display = 'block';
};

exitButton.onclick = () => {
  formPopUp.classList.add('form-display');
}

popUpBtn.onclick = () =>{
  popUpInputs.forEach(input => {
    console.log(input.value);
  });
};

hamburgerMenu.onclick = ()=> {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
};

function closePopup() {
  // Code to close the popup
  formPopUp.style.display = 'none';
};

document.onclick =  (event) => {
  if (event.target == formPopUp) {
    closePopup();
}};

let currentIndex = 0;

prevButton.onclick = () => {
    if (window.innerWidth <= 1150) {
        cards[currentIndex].style.display = 'none';
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        cards[currentIndex].style.display = 'block';
    }
};

nextButton.onclick = () => {
    if (window.innerWidth <= 1150) {
        cards[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % cards.length;
        cards[currentIndex].style.display = 'block';
    }
};

