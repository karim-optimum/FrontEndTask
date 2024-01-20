let shareButtons = document.querySelectorAll('.share');
let contactButton = document.querySelector('.contact-btn');
let formPopUp = document.querySelector('.form-popup'); 
let exitButton = document.querySelector('.exit'); 
let url = '';

shareButtons.forEach((shareButton) => {
  shareButton.onclick = () => {
    url = window.location.href;
    console.log(url);
  };
});

contactButton.onclick = () => {

  formPopUp.style.display = 'block';
}

exitButton.onclick = () => {
  formPopUp.style.display = 'none';
}