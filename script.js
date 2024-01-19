let shareButton = document.querySelector('.share');
let url = '';

shareButton.onclick = function(){
  url = window.location.href;
  console.log(url);
} 