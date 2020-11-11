
const navigationMenu = document.querySelector('#navigation-menu');
const btnBars = document.querySelector('#btn-bars');

btnBars.addEventListener('click', () => {
   navigationMenu.classList.toggle('active');
})