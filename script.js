let shareButtons = document.querySelectorAll('.share');
let contactButton = document.querySelector('.contact-btn');
let formPopUp = document.querySelector('.form-popup'); 
let exitButton = document.querySelector('.exit'); 
let popUpInputs = document.querySelectorAll('.input-border');
let popUpBtn = document.querySelector('.popup-contact-btn');
let hamburgerMenu = document.querySelector('.hamburger');
let navMenu = document.querySelector('.nav-menu');
let links = document.querySelectorAll('.nav-link');

links.forEach(n => n.onclick = () => {
  hamburgerMenu.classList.remove('active')
  navMenu.classList.remove('active')
})

let url = '';

shareButtons.forEach((shareButton) => {
  shareButton.onclick = () => {
    url = window.location.href;
    console.log(url);
  };
});

contactButton.onclick = () => {
  formPopUp.classList.remove('form-display');
  formPopUp.style.display = 'block';
}

exitButton.onclick = () => {
  formPopUp.classList.add('form-display');
}

popUpBtn.onclick = () =>{
  popUpInputs.forEach(input => {
    console.log(input.value);
  });
}

hamburgerMenu.onclick = ()=> {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
}