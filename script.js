let shareButtons = document.querySelectorAll('.share');
let url = '';

shareButtons.forEach((shareButton) => {
  shareButton.onclick = () => {
    url = window.location.href;
    console.log(url);
  };
});

let contactButton = document.querySelector('.contact-btn');
contactButton.onclick = () => {
  console.log('hello')
}