let menuOpen = document.getElementById('menu-open');
let nav = document.getElementById('nav');
menuOpen.addEventListener('click', function() {
  nav.classList.toggle('close');
}, false);
