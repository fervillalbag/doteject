
const navigationMenu = document.querySelector('#navigation-menu');
const btnBars = document.querySelector('#btn-bars');

btnBars.addEventListener('click', () => {
   navigationMenu.classList.toggle('active');
})

/* Dropdown */

const dropdown1 = document.querySelector('#dropdown1');
const dropdownBody1 = document.querySelector('#dropdownBody1');
const menuOverlay = document.querySelector('#menuOverlay');

dropdown1.addEventListener('click', () => {
   dropdownBody1.classList.add('active');
   menuOverlay.classList.add('active');
});

menuOverlay.addEventListener('click', (e) => {
   e.preventDefault();
   dropdownBody1.classList.remove('active');
   menuOverlay.classList.remove('active');
});