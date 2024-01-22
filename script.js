let shareButtons = document.querySelectorAll('.share');
let contactButton = document.querySelector('.contact-btn');
let formPopUp = document.querySelector('.form-popup'); 
let exitButton = document.querySelector('.exit'); 
let popUpInputs = document.querySelectorAll('.input-border');
let popUpBtn = document.querySelector('.popup-contact-btn');
let hamburgerMenu = document.querySelector('.hamburger');
let navMenu = document.querySelector('.nav-menu');
let links = document.querySelectorAll('.nav-link');
const cards = document.querySelectorAll('.card');
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let url = '';

shareButtons.forEach((shareButton) => {
  shareButton.onclick = () => {
    url = window.location.href;
    console.log(url);
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
  if (formPopUp.contains(event.target)) {
    closePopup();
}};

let currentIndex = 0;

function updateButtonState() {
 if (window.matchMedia("(min-width: 1100px)").matches) {
    // If viewport is wider than 1200px, disable the buttons
    prevButton.disabled = true;
    nextButton.disabled = true;
 } else {
    // Otherwise, enable the buttons
    prevButton.disabled = false;
    nextButton.disabled = false;
 }
};

updateButtonState();

prevButton.onclick = () => {
 if(currentIndex > 0){
    cards[currentIndex].style.display = 'none';
    currentIndex--;
    cards[currentIndex].style.display = 'block';
 }
};

nextButton.onclick = () => {
 if(currentIndex < cards.length - 1){
    cards[currentIndex].style.display = 'none';
    currentIndex++;
    cards[currentIndex].style.display = 'block';
 }
};
