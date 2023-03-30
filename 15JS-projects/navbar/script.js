const links = document.querySelector('.links');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', function () {
  console.log(links.classList.contains('root'));
  if (links.classList.contains('show-links')) {
    links.classList.remove('show-links')
  }
  else {
    links.classList.add('showlinks')
  }
  links.classList.toggle("show-links");
})

