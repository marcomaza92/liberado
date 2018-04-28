// Variables
let open = document.getElementById('menu-open');
let close = document.getElementById('menu-close');
let nav = document.getElementById('nav');
let about = nav.querySelector('#about-desktop');
let work = nav.querySelector('#work-desktop');
let knowledge = nav.querySelector('#knowledge-desktop');
let contact = nav.querySelector('#contact-desktop');

// Functions
function menuClose() {
  nav.classList.toggle('close');
}
function menuOpen() {
  nav.classList.toggle('close');
}
function resizeViewport() {
  console.log(window.innerWidth);
  console.log(window.innerHeight);
}
// Actions
resizeViewport();

window.addEventListener('resize', resizeViewport);

open.addEventListener('click', menuOpen, false);

close.addEventListener('click', menuClose, false);
about.addEventListener('click', menuClose, false);
work.addEventListener('click', menuClose, false);
knowledge.addEventListener('click', menuClose, false);
contact.addEventListener('click', menuClose, false);
